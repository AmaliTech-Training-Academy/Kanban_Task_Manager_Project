import axios from 'axios';

export const sendInvitation = async () => {
  try {
    const response = await axios.post('/api/send-invitation', null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return true; 
    } else {
      return false; 
    }
  } catch (error) {
    console.error('Error sending invitation:', error);
    return false; 
  }
};
