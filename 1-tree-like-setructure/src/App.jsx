import MenuItem from "./components/MenuItem";

const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children: [
              {
                label: 'Random data',
                to: ''
              }
            ]
          },
        ],
      },
    ],
  },
];

const App = () => {
  return (
    <div className="min-h-screen w-1/3 p-6 bg-gray-900 text-gray-100">
      <div className="space-y-4">
        {menus.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default App