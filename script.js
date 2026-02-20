document.addEventListener("DOMContentLoaded", () => {

  const events = [
    {
      title: "Build With AI Bootcamp",
      desc: "3-day hands-on bootcamp on Generative AI and ML basics.",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      link: "https://google.com"
    },
    {
      title: "Hack The Future 2026",
      desc: "24-hour hackathon solving real-world campus problems.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      link: "https://google.com"
    },
    {
      title: "Open Source Sprint",
      desc: "Contribute to live open-source projects.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      link: "https://google.com"
    }
  ];

  const achievements = [
    {
      title: "1200+ Active Members",
      desc: "One of the fastest growing tech communities."
    },
    {
      title: "15+ Hackathon Wins",
      desc: "State and national level achievements."
    }
  ];

  const team = [
    {
      name: "sshivam",
      role: "Chapter Lead",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Adithya N",
      role: "Technical Lead",
      img: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Nikhil S",
      role: "Design Lead",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  function renderCards(data, containerId, type="default") {
    const container = document.getElementById(containerId);

    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      if(type === "team") card.classList.add("team-card");

      card.innerHTML = `
        ${item.img ? `<img src="${item.img}" alt="">` : ""}
        <h3>${item.title || item.name}</h3>
        <p>${item.desc || item.role}</p>
      `;

      if(item.link){
        card.style.cursor = "pointer";
        card.addEventListener("click", () => {
          window.open(item.link, "_blank");
        });
      }

      container.appendChild(card);
    });
  }

  renderCards(events, "events-container");
  renderCards(achievements, "achievements-container");
  renderCards(team, "team-container", "team");

});