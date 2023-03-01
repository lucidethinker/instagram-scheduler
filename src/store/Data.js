const userData = [
  {
    id: 1,
    username: "john_doe",
    profilePhoto:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    password: "password123",
    posts: [
      {
        id: 1,
        caption: "Beautiful sunset at the beach",
        imageUrl: "https://example.com/sunset.jpg",
        scheduledDate: "2023-02-25 17:00:00",
      },
      {
        id: 2,
        caption: "Fun day at the amusement park",
        imageUrl: "https://example.com/amusement_park.jpg",
        scheduledDate: "2023-03-01 12:30:00",
      },
    ],
  },
  {
    id: 2,
    username: "jane_smith",
    password: "password456",
    profilePhoto:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    posts: [
      {
        id: 1,
        caption: "Delicious pizza for dinner",
        imageUrl: "https://example.com/pizza.jpg",
        scheduledDate: "2023-02-27 18:00:00",
      },
      {
        id: 2,
        caption: "Exploring the city",
        imageUrl: "https://example.com/city.jpg",
        scheduledDate: "2023-03-03 09:00:00",
      },
    ],
  },
];
export default userData;

 