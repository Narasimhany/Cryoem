import React from "react";
import {
  FaCloud,
  FaDollarSign,
  FaBolt,
  FaArchive,
  FaHandshake,
  FaLock
} from "react-icons/fa";
import "./HomeFeatures.css";

const features = [
  {
    icon: <FaCloud />,
    title: "PractiCloud in the front",
    desc: "We designed a new UI that guides you through analysis while giving you flexibility and overview."
  },
  {
    icon: <FaBolt />,
    title: "Relion in the back… & more to come!",
    desc: "CryoCloud uses Relion, trusted by the community for 10+ years. More packages coming soon."
  },
  {
    icon: <FaDollarSign />,
    title: "Cost-efficient",
    desc: "No need for your own HPC hardware or IT maintenance. Always up to date with the newest hardware."
  },
  {
    icon: <FaHandshake />,
    title: "Collaborative",
    desc: "Share results, view reports, and inspect 3D densities with colleagues right inside the browser."
  },
  {
    icon: <FaBolt />,
    title: "Fast",
    desc: "With cloud resources, queues are eliminated. Enjoy instant access to powerful compute machines."
  },
  {
    icon: <FaArchive />,
    title: "Easy Archiving",
    desc: "Archive published or outdated cryo-EM projects with one click—efficient and hassle-free."
  },
  {
    icon: <FaLock />,
    title: "Secure",
    desc: "Built on encrypted infrastructure with backups, MFA, and strict authentication."
  },
];

export default function HomeFeatures() {
  return (
    <section className="home-features">
      <div className="hf-container">
        <h2 className="hf-title">Get started right away</h2>
        <p className="hf-subtext">
          PractiCloud simplifies your workflow—from data to structure—by removing bottlenecks
          and eliminating installation steps. Create an account and start analyzing immediately.
        </p>

        <div className="hf-column">
          {features.map((f, idx) => (
            <div className="hf-item" key={idx}>
              <div className="hf-icon">{f.icon}</div>
              <div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
