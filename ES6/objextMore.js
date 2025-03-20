const users = [
    {name: 'Raiyan', joined: "2024"},
    {name: 'Mahfuz', joined: "2025"},
    {name: 'Joshim', joined: "2024"},
    {name: 'Nayok', joined: "2025"},
    {name: 'Jakanaka', joined: "2026"},
];

const groupByJoinedUser = Object.groupBy(users,user=> user.joined);
console.log(groupByJoinedUser);