// API Service for MySQL Backend

const handleResponse = async (response: Response) => {
  console.log(`API Response: ${response.status} ${response.url}`);
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "API request failed");
    }
    return data;
  } else {
    // Handle non-JSON responses (like HTML error pages)
    const text = await response.text();
    console.error("Unexpected non-JSON response:", text.substring(0, 200));
    throw new Error(`Server returned non-JSON response (${response.status})`);
  }
};

export const api = {
  async syncUser(user: { uid: string; email: string; displayName: string | null; photoURL: string | null }) {
    console.log("Syncing user:", user.uid);
    const response = await fetch(`${window.location.origin}/api/users/sync`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return handleResponse(response);
  },

  async createBooking(booking: {
    user_uid: string;
    sport_id: string;
    sport_name: string;
    trainer_id: string | null;
    trainer_name: string | null;
    date: string;
    time: string;
    price: number;
  }) {
    console.log("Creating booking for:", booking.user_uid);
    const response = await fetch(`${window.location.origin}/api/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });
    return handleResponse(response);
  },

  async getBookings(uid: string) {
    console.log("Fetching bookings for:", uid);
    try {
      const response = await fetch(`${window.location.origin}/api/bookings/${uid}`);
      return await handleResponse(response);
    } catch (error) {
      console.error(`Fetch error for /api/bookings/${uid}:`, error);
      throw error;
    }
  },

  async cancelBooking(id: number) {
    const response = await fetch(`${window.location.origin}/api/bookings/${id}/cancel`, {
      method: "PATCH",
    });
    return handleResponse(response);
  },

  async createApplication(application: {
    user_uid: string;
    full_name: string;
    email: string;
    phone: string;
    sport_interest: string;
    experience: string;
  }) {
    const response = await fetch(`${window.location.origin}/api/applications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(application),
    });
    return handleResponse(response);
  },
};
