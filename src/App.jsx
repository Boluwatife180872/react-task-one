import React from "react";
import me from "./assets/me.jpg";

import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  return (
    <main className="container">
      <ProfileCard
        name="Onukwu Boluwatife Ifeanyichukwu"
        image={me}
        bio="Frontend developer passionate about creating beautiful user interfaces. I love working with React and exploring new technologies. In my free time, I enjoy reading and listening to music."
      />
    </main>
  );
}

export default App;
