const testAccounts = ['@user1', '@user2', '@user3', '@user4', '@user5'];
const testScheduledPosts = {
  '@user1': [
    {
      id: 1,
      caption: 'Test post 1',
      imageUrl: 'https://via.placeholder.com/150',
      scheduledTime: new Date('2023-03-01T10:00:00.000Z'),
    },
    {
      id: 2,
      caption: 'Test post 2',
      imageUrl: 'https://via.placeholder.com/150',
      scheduledTime: new Date('2023-03-02T10:00:00.000Z'),
    },
  ],
  '@user2': [
    {
      id: 3,
      caption: 'Test post 3',
      imageUrl: 'https://via.placeholder.com/150',
      scheduledTime: new Date('2023-03-03T10:00:00.000Z'),
    },
    {
      id: 4,
      caption: 'Test post 4',
      imageUrl: 'https://via.placeholder.com/150',
      scheduledTime: new Date('2023-03-04T10:00:00.000Z'),
    },
  ],
  '@user3': [
    {
      id: 5,
      caption: 'Test post 5',
      imageUrl: 'https://via.placeholder.com/150',
      scheduledTime: new Date('2023-03-05T10:00:00.000Z'),
    },
  ],
};
export { testAccounts, testScheduledPosts };