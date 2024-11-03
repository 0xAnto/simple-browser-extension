import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useUserStore } from "../../store/userStore";

const Home = () => {
  const name = useUserStore((state) => state.name);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to welcome if no name is set
    if (!name) {
      navigate('/');
    }
  }, [name, navigate]);

  const features = [
    { title: "Statistics", desc: "View your usage stats", delay: "0.2s" },
    { title: "Settings", desc: "Customize your experience", delay: "0.3s" },
    { title: "Bookmarks", desc: "Manage saved items", delay: "0.4s" },
    { title: "History", desc: "Browse your activity", delay: "0.5s" }
  ];

  return (
    <div className="page-container min-h-screen">
      <div className="card flex flex-col h-full">
        {/* Main content area */}
        <div className="flex-1">
          <div className="content-slide-up" style={{ animationDelay: "0.1s" }}>
            <h1>{name ? `${name}'s Dashboard` : 'Dashboard'}</h1>
          </div>

          <div className="grid grid-cols-2 gap-4 my-6">
            {features.map((item) => (
              <div
                key={item.title}
                className="feature-card content-slide-up"
                style={{ animationDelay: item.delay }}
              >
                <h2>{item.title}</h2>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with back button - always at bottom */}
        <div className="mt-6">
          <Link
            to="/"
            className="gradient-button w-full text-white flex items-center justify-center space-x-2 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Welcome</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;