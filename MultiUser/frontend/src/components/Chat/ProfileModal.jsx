import { useState, useContext, useEffect } from 'react';
import { ChatContext } from '../../context/ChatContext';
import './ProfileModal.css';

export default function ProfileModal({ isOpen, onClose }) {
  const { user, logout } = useContext(ChatContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    fullname: user?.fullname || '',
    email: user?.email || '',
  });
  const [localUser, setLocalUser] = useState(user);

  // Update localUser when user changes
  useEffect(() => {
    setLocalUser(user);
    setEditData({
      fullname: user?.fullname || '',
      email: user?.email || '',
    });
  }, [user, isOpen]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({
      fullname: localUser?.fullname || '',
      email: localUser?.email || '',
    });
  };

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify({
      ...localUser,
      fullname: editData.fullname,
      email: editData.email,
    }));
    setIsEditing(false);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
      window.location.href = '/';
    }
  };

  if (!isOpen) return null;

  const displayName = localUser?.fullname || 'User';
  const userEmail = localUser?.email || 'Not available';
  const userInitial = (displayName && displayName.charAt(0).toUpperCase()) || 'U';

  return (
    <>
      <div className="profile-modal-overlay" onClick={onClose} />
      <div className="profile-modal">
        <div className="profile-modal-header">
          <h2>Profile Settings</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="profile-modal-content">
          {/* Avatar Section */}
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              {userInitial}
            </div>
            <p className="profile-status">Active</p>
          </div>

          {/* Profile Info */}
          <div className="profile-info-section">
            {isEditing ? (
              <div className="edit-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={editData.fullname}
                    onChange={(e) => setEditData({ ...editData, fullname: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    placeholder="Enter your email"
                    disabled
                  />
                </div>

                <div className="edit-actions">
                  <button className="save-btn" onClick={handleSave}>Save Changes</button>
                  <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              </div>
            ) : (
              <div className="profile-details">
                <div className="detail-item">
                  <span className="detail-label">Full Name</span>
                  <span className="detail-value">{displayName}</span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{userEmail}</span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Member Since</span>
                  <span className="detail-value">
                    {localUser?.createdAt ? new Date(localUser.createdAt).toLocaleDateString() : 'Recently'}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Account Status</span>
                  <span className="detail-value">Active</span>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {!isEditing && (
            <div className="profile-actions">
              <button className="edit-profile-btn" onClick={handleEdit}>
                ✎ Edit Profile
              </button>
            </div>
          )}
        </div>

        <div className="profile-modal-footer">
          <button className="logout-modal-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </div>
    </>
  );
}
