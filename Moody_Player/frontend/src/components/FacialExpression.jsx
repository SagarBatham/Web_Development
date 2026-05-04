import * as faceapi from 'face-api.js';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import "./FaceExpression.css"

function FaceExpression({setsongsData}) {
  const videoRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [emotion, setEmotion] = useState("");
  let maxExpression=''
  useEffect(() => {
    loadModels();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const loadModels = async () => {
    const MODEL_URL = '/models';

    try {
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

      setModelsLoaded(true);
      startVideo();
    } catch (err) {
      console.error("Model loading error:", err);
    }
  };

  const startVideo = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  const detectExpressions = async () => {
    if (!modelsLoaded) {
      alert("Models are still loading...");
      return;
    }

    if (!videoRef.current) return;

    const detections = await faceapi
      .detectAllFaces(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      )
      .withFaceExpressions();

    if (detections.length > 0) {
      const expressions = detections[0].expressions;

      maxExpression = Object.keys(expressions).reduce((a, b) =>
        expressions[a] > expressions[b] ? a : b
      );
       console.log(maxExpression);
       axios.get(`http://localhost:3000/songs?mood=${maxExpression}`)
       .then(response=>{
        const songs=response.data
        setsongsData(songs.songs)

       })
      setEmotion(maxExpression);
    } else {
      console.log("No Face Detected");
      
      setEmotion("No face detected");
    }
    
  };

  return (
    <>
     <h2 className='head'>Face Expression Detector</h2>
    <div className='mainCont'>


      <video className='videoRender' ref={videoRef} autoPlay muted width="400" height="300" />

      {!modelsLoaded && <p>Loading models...</p>}

      <button onClick={detectExpressions} className='btn'>
        Detect Emotion
      </button>
    </div>
    </>
    
  );
}

export default FaceExpression;