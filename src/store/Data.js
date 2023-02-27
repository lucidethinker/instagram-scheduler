const userData = [
  {
    id: 1,
    username: "john_doe",
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

// Path: src/store/Actions.js