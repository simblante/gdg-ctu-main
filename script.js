// =====================================
// YEAR SELECTOR - OFFICERS
// =====================================

document.addEventListener("DOMContentLoaded", function () {
  const yearButtons = document.querySelectorAll(".year-btn");
  const yearGroups = document.querySelectorAll(".year-group");

  if (yearButtons.length === 0) {
    return;
  }

  const defaultYear = "2025-2026";
  showYear(defaultYear);

  yearButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const year = this.dataset.year;
      yearButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      showYear(year);
    });
  });

  function showYear(year) {
    yearGroups.forEach((group) => {
      if (group.dataset.year === year) {
        group.style.display = "block";
        group.classList.add("active");
        group.style.opacity = "0";
        group.style.transform = "translateY(20px)";
        setTimeout(() => {
          group.style.opacity = "1";
          group.style.transform = "translateY(0)";
        }, 50);
      } else {
        group.style.display = "none";
        group.classList.remove("active");
      }
    });
  }
});

// =====================================
// STATIC OFFICERS DATA - COMPLETE
// =====================================

const staticOfficers = {
  "2025-2026": {
    executive_board: [
      {
        id: "exec-1",
        name: "Tyrone Tabornal",
        role: "Campus Organizer",
        department: "EXECUTIVE BOARD",
        sy: "S.Y. 2025-2026",
        birthday: "January 15, 2000",
        email: "tyrone.tabornal@ctu.edu.ph",
        image: "includes/images/Campus Organizer.jpg",
        responsibilities: "Oversee all operations and lead the executive team.",
        fb: "https://facebook.com/tyronetabornal",
        twitter: "https://twitter.com/tyronetabornal",
        linkedin: "https://linkedin.com/in/tyronetabornal",
        github: "https://github.com/tyronetabornal"
      },
      {
        id: "exec-2",
        name: "James Niño Tan",
        role: "Campus Organizer",
        department: "EXECUTIVE BOARD",
        sy: "S.Y. 2025-2026",
        birthday: "March 22, 2001",
        email: "james.nino.tan@ctu.edu.ph",
        image: "includes/images/Chief-Technology-Officer.jpg",
        responsibilities: "Assist the President and oversee internal affairs.",
        fb: "https://facebook.com/jamesnino.tan",
        twitter: "https://twitter.com/jamesnino.tan",
        linkedin: "https://linkedin.com/in/jamesnino.tan",
        github: "https://github.com/jamesnino.tan"
      },
      {
        id: "exec-3",
        name: "Michael Angelo Bejona",
        role: "Chief Operating Officer",
        department: "EXECUTIVE BOARD",
        sy: "S.Y. 2025-2026",
        birthday: "June 10, 2000",
        email: "michael.angelo.bejona@ctu.edu.ph",
        image: "includes/images/Chief Operating Officer.jpg",
        responsibilities: "Manage documentation and meeting minutes.",
        fb: "https://facebook.com/michaelbejona",
        twitter: "https://twitter.com/michaelbejona",
        linkedin: "https://linkedin.com/in/michaelbejona",
        github: "https://github.com/michaelbejona"
      },
      {
        id: "exec-4",
        name: "Alexis Red Saranza",
        role: "Chief Community Development Officer",
        department: "EXECUTIVE BOARD",
        sy: "S.Y. 2025-2026",
        birthday: "June 10, 2000",
        email: "alexis.red.saranza@ctu.edu.ph",
        image: "includes/images/Chief community development Officer.jpg",
        responsibilities: "Manage documentation and meeting minutes.",
        fb: "https://facebook.com/alexissaranza",
        twitter: "https://twitter.com/alexissaranza",
        linkedin: "https://linkedin.com/in/alexissaranza",
        github: "https://github.com/alexissaranza"
      },
      {
        id: "exec-5",
        name: "Mikaela Vianca Molina",
        role: "Chief Community Development Officer",
        department: "EXECUTIVE BOARD",
        sy: "S.Y. 2025-2026",
        birthday: "June 10, 2000",
        email: "mikaela.vianca.molina@ctu.edu.ph",
        image: "includes/images/Consultant.jpg",
        responsibilities: "Manage documentation and meeting minutes.",
        fb: "https://facebook.com/mikaelamolina",
        twitter: "https://twitter.com/mikaelamolina",
        linkedin: "https://linkedin.com/in/mikaelamolina",
        github: "https://github.com/mikaelamolina"
      }
    ],
    operations: [
      {
        id: "ops-1",
        name: "Michael Angelo Bejona",
        role: "Chief Operating Officer",
        department: "OPERATIONS",
        sy: "S.Y. 2025-2026",
        birthday: "February 5, 2001",
        email: "michael.angelo.bejona@ctu.edu.ph",
        image: "includes/images/Chief Operating Officer.jpg",
        responsibilities: "Coordinate events and manage operations.",
        fb: "https://facebook.com/michaelbejona",
        twitter: "https://twitter.com/michaelbejona",
        linkedin: "https://linkedin.com/in/michaelbejona",
        github: "https://github.com/michaelbejona"
      },
      {
        id: "ops-2",
        name: "Lucy Jean Bansag",
        role: "Volunteer Management Lead",
        department: "OPERATIONS",
        sy: "S.Y. 2025-2026",
        birthday: "August 12, 2002",
        email: "lucy.bansag@ctu.edu.ph",
        image: "includes/images/Volunteer Management Lead.jpg",
        responsibilities: "Assist in event logistics and planning.",
        fb: "https://facebook.com/lucybansag",
        twitter: "https://twitter.com/lucybansag",
        linkedin: "https://linkedin.com/in/lucybansag",
        github: "https://github.com/lucybansag"
      },
      {
        id: "ops-3",
        name: "Ma. Cristine Bierba",
        role: "Event Lead",
        department: "OPERATIONS",
        sy: "S.Y. 2025-2026",
        birthday: "August 12, 2002",
        email: "ma.cristine.bierba@ctu.edu.ph",
        image: "includes/images/Event Lead.jpg",
        responsibilities: "Assist in event logistics and planning.",
        fb: "https://facebook.com/ma.cristine.bierba",
        twitter: "https://twitter.com/ma.cristine.bierba",
        linkedin: "https://linkedin.com/in/ma.cristine.bierba",
        github: "https://github.com/ma.cristine.bierba"
      }
    ],
    technology: [
      {
        id: "tech-1",
        name: "James Niño Tan",
        role: "Tech Lead",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "April 18, 2000",
        email: "james.nino.tan@ctu.edu.ph",
        image: "includes/images/chief-technology-officer.jpg",
        responsibilities: "Lead technical projects and development.",
        fb: "https://facebook.com/jamesnino.tan",
        twitter: "https://twitter.com/jamesnino.tan",
        linkedin: "https://linkedin.com/in/jamesnino.tan",
        github: "https://github.com/jamesnino.tan"
      },
      {
        id: "tech-2",
        name: "James Simblante",
        role: "Web Development Lead",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "October 31, 2006",
        email: "simblantejamesjk@gmail.com",
        image: "includes/images/WebDevelopementLead.jpg",
        responsibilities: "Build and maintain web applications.",
        fb: "https://facebook.com/James Simblante",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/in/james-simblante",
        github: "https://github.com/simblante/jweb"
      },
      {
        id: "tech-3",
        name: "Jefferson Gonzales",
        role: "Cybersecurity Lead",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "October 31, 2006",
        email: "jefferson.gonzales@gmail.com",
        image: "includes/images/Cybersecurity Lead.jpg",
        responsibilities: "Ensure the security of our digital assets.",
        fb: "https://facebook.com/Jefferson Gonzales",
        twitter: "https://twitter.com/JeffersonGonzales",
        linkedin: "https://linkedin.com/in/jefferson-gonzales",
        github: "https://github.com/jeffergonz"
      },
      {
        id: "tech-4",
        name: "Dexter Inguito",
        role: "Mobile Development Lead",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "October 31, 2006",
        email: "dexter@gmail.com",
        image: "includes/images/Mobile Development Lead.jpg",
        responsibilities: "Ensure the security of our digital assets.",
        fb: "https://facebook.com/dexter.inguito",
        twitter: "https://twitter.com/JeffersonGonzales",
        linkedin: "https://linkedin.com/in/jefferson-gonzales",
        github: "https://github.com/jeffergonz"
      },
      {
        id: "tech-5",
        name: "Julian Gen Carticiano",
        role: "Data Science and Analysis Lead",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "October 31, 2006",
        email: "julian.gen.carticiano@gmail.com",
        image: "includes/images/Data Science and Analysis Lead.jpg",
        responsibilities: "Lead data science and analysis initiatives.",
        fb: "https://facebook.com/julian.gen.carticiano",
        twitter: "https://twitter.com/julian.gen.carticiano",
        linkedin: "https://linkedin.com/in/julian.gen.carticiano",
        github: "https://github.com/julian.gen.carticiano"
      },
      {
        id: "tech-6",
        name: "Honeylyn Jeda Carocoy",
        role: "UI/UX Lead",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "October 31, 2006",
        email: "honeylyn.jeda.carocoy@gmail.com",
        image: "includes/images/UI UX Lead.jpg",
        responsibilities: "Lead data science and analysis initiatives.",
        fb: "https://facebook.com/julian.gen.carticiano",
        twitter: "https://twitter.com/julian.gen.carticiano",
        linkedin: "https://linkedin.com/in/julian.gen.carticiano",
        github: "https://github.com/julian.gen.carticiano"
      },
      {
        id: "tech-7",
        name: "Jonrheym Remegia",
        role: "Artificial Intelligence and Machine Lead",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "October 31, 2006",
        email: "honeylyn.jeda.carocoy@gmail.com",
        image: "includes/images/AI AND ML Lead.jpg",
        responsibilities: "Lead data science and analysis initiatives.",
        fb: "https://facebook.com/julian.gen.carticiano",
        twitter: "https://twitter.com/julian.gen.carticiano",
        linkedin: "https://linkedin.com/in/julian.gen.carticiano",
        github: "https://github.com/julian.gen.carticiano"
      },
      {
        id: "tech-8",
        name: "Ryan Andrie Coretico",
        role: "Game Development Lead",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "October 31, 2006",
        email: "ryan.andrie.coretico@gmail.com",
        image: "includes/images/Game Developement Lead.jpg",
        responsibilities: "Lead data science and analysis initiatives.",
        fb: "https://facebook.com/julian.gen.carticiano",
        twitter: "https://twitter.com/julian.gen.carticiano",
        linkedin: "https://linkedin.com/in/julian.gen.carticiano",
        github: "https://github.com/julian.gen.carticiano"
      },
      {
        id: "tech-9",
        name: "John Derrick Gamon",
        role: "Web Development Associate Lead",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "October 31, 2006",
        email: "john.derrick.gamon@gmail.com",
        image: "includes/images/Web Dev Associate Lead.jpg",
        responsibilities: "Lead data science and analysis initiatives.",
        fb: "https://facebook.com/julian.gen.carticiano",
        twitter: "https://twitter.com/julian.gen.carticiano",
        linkedin: "https://linkedin.com/in/julian.gen.carticiano",
        github: "https://github.com/julian.gen.carticiano"
      },
      {
        id: "tech-10",
        name: "Mitch Andrie Amores",
        role: "Web Development Associate Lead",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "October 31, 2006",
        email: "mitch.andrie.amores@gmail.com",
        image: "includes/images/Web Dev Associate Lead 1.jpg",
        responsibilities: "Lead data science and analysis initiatives.",
        fb: "https://facebook.com/julian.gen.carticiano",
        twitter: "https://twitter.com/julian.gen.carticiano",
        linkedin: "https://linkedin.com/in/julian.gen.carticiano",
        github: "https://github.com/julian.gen.carticiano"
      },
      {
        id: "tech-11",
        name: "John Vincent Augusto",
        role: "Cloud Development Lead",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "October 31, 2006",
        email: "vincent.augusto@gmail.com",
        image: "includes/images/Cloud Development Lead.jpg",
        responsibilities: "Lead data science and analysis initiatives.",
        fb: "https://facebook.com/julian.gen.carticiano",
        twitter: "https://twitter.com/julian.gen.carticiano",
        linkedin: "https://linkedin.com/in/julian.gen.carticiano",
        github: "https://github.com/julian.gen.carticiano"
      },
      {
        id: "tech-12",
        name: "Mary Jane Soller",
        role: "Technical Project Lead",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "October 31, 2006",
        email: "mary.jane.soller@gmail.com",
        image: "includes/images/Technical Project Lead.jpg",
        responsibilities: "Lead data science and analysis initiatives.",
        fb: "https://facebook.com/julian.gen.carticiano",
        twitter: "https://twitter.com/julian.gen.carticiano",
        linkedin: "https://linkedin.com/in/julian.gen.carticiano",
        github: "https://github.com/julian.gen.carticiano"
      },
      {
        id: "tech-13",
        name: "Janssen Feihl Geyrozaga",
        role: "Data Science and Analysis Associate Lead",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "October 31, 2006",
        email: "janssen.feihl.geyroza@gmail.com",
        image: "includes/images/Data science and analysis associate.jpg",
        responsibilities: "Lead data science and analysis initiatives.",
        fb: "https://facebook.com/julian.gen.carticiano",
        twitter: "https://twitter.com/julian.gen.carticiano",
        linkedin: "https://linkedin.com/in/julian.gen.carticiano",
        github: "https://github.com/julian.gen.carticiano"
      }
    ],
    community: [
      {
        id: "comm-1",
        name: "Alexis Red Saranza",
        role: "Chief Community Development Officer",
        department: "COMMUNITY",
        sy: "S.Y. 2025-2026",
        birthday: "July 14, 2001",
        email: "alexis.red.saranza@ctu.edu.ph",
        image: "includes/images/Chief community development Officer.jpg",
        responsibilities: "Build and engage the developer community.",
        fb: "https://facebook.com/alexissaranza",
        twitter: "https://twitter.com/alexissaranza",
        linkedin: "https://linkedin.com/in/alexissaranza",
        github: "https://github.com/alexissaranza"
      },
      {
        id: "comm-2",
        name: "Althea Lila Ocariza",
        role: "External Relations Lead",
        department: "COMMUNITY",
        sy: "S.Y. 2025-2026",
        birthday: "October 19, 2002",
        email: "althea.ocariza@ctu.edu.ph",
        image: "includes/images/External Relations Lead 1.jpg",
        responsibilities: "Organize community events and activities.",
        fb: "https://facebook.com/altheaocariza",
        twitter: "https://twitter.com/altheaocariza",
        linkedin: "https://linkedin.com/in/altheaocariza",
        github: "https://github.com/altheaocariza"
      },
      {
        id: "comm-3",
        name: "Kristine Mae Junsay",
        role: "External Relations Lead",
        department: "COMMUNITY",
        sy: "S.Y. 2025-2026",
        birthday: "October 19, 2002",
        email: "kristine.junsay@ctu.edu.ph",
        image: "includes/images/External Relations Lead.jpg",
        responsibilities: "Organize community events and activities.",
        fb: "https://facebook.com/kristinejunsay",
        twitter: "https://twitter.com/kristinejunsay",
        linkedin: "https://linkedin.com/in/kristinejunsay",
        github: "https://github.com/kristinejunsay"
      },
      {
        id: "comm-4",
        name: "IC Myles Catagcatag",
        role: "Internal Relations Lead",
        department: "COMMUNITY",
        sy: "S.Y. 2025-2026",
        birthday: "October 19, 2002",
        email: "iccatagcatag@gmail.com",
        image: "includes/images/External Relation Lead.jpg",
        responsibilities: "Organize community events and activities.",
        fb: "https://facebook.com/iccatagcatag",
        twitter: "https://twitter.com/iccatagcatag",
        linkedin: "https://linkedin.com/in/iccatagcatag",
        github: "https://github.com/iccatagcatag"
      }
    ],
    creatives: [
      {
        id: "crea-1",
        name: "Russel Alforque",
        role: "Graphic Designer",
        department: "CREATIVES",
        sy: "S.Y. 2025-2026",
        birthday: "May 21, 2001",
        email: "russel.alforque@ctu.edu.ph",
        image: "includes/images/Graphic Designer 3.jpg",
        responsibilities: "Lead creative and design initiatives.",
        fb: "https://facebook.com/russelalforque",
        twitter: "https://twitter.com/russelalforque",
        linkedin: "https://linkedin.com/in/russelalforque",
        github: "https://github.com/russelalforque"
      },
      {
        id: "crea-2",
        name: "John Paul Mamolo",
        role: "Graphic Designer",
        department: "CREATIVES",
        sy: "S.Y. 2025-2026",
        birthday: "May 21, 2001",
        email: "johnpaul.mamolo@ctu.edu.ph",
        image: "includes/images/Graphic Designer 2.jpg",
        responsibilities: "Lead creative and design initiatives.",
        fb: "https://facebook.com/johnpaulmamolo",
        twitter: "https://twitter.com/johnpaulmamolo",
        linkedin: "https://linkedin.com/in/johnpaulmamolo",
        github: "https://github.com/johnpaulmamolo"
      },
      {
        id: "crea-3",
        name: "Huey Sumanting",
        role: "Graphic Designer",
        department: "CREATIVES",
        sy: "S.Y. 2025-2026",
        birthday: "May 21, 2001",
        email: "hueysumanting24@gmail.com",
        image: "includes/images/Graphics Designer.jpg",
        responsibilities: "Lead creative and design initiatives.",
        fb: "https://facebook.com/hueysumanting",
        twitter: "https://twitter.com/hueysumanting",
        linkedin: "https://linkedin.com/in/hueysumanting",
        github: "https://github.com/hueysumanting"
      },
      {
        id: "crea-4",
        name: "LC Camposo",
        role: "Graphic Designer",
        department: "CREATIVES",
        sy: "S.Y. 2025-2026",
        birthday: "May 21, 2001",
        email: "lccamposo.505@gmail.com",
        image: "includes/images/Graphics Designer 1.jpg",
        responsibilities: "Lead creative and design initiatives.",
        fb: "https://facebook.com/lccamposo",
        twitter: "https://twitter.com/lccamposo",
        linkedin: "https://linkedin.com/in/lccamposo",
        github: "https://github.com/lccamposo"
      },
      {
        id: "crea-5",
        name: "Bea Angela Verastigue",
        role: "Photography/Videography Officer",
        department: "CREATIVES",
        sy: "S.Y. 2025-2026",
        birthday: "May 21, 2001",
        email: "kskaneki5@gmail.com",
        image: "includes/images/Photography videography Officer.jpg",
        responsibilities: "Lead creative and design initiatives.",
        fb: "https://facebook.com/beaverastigue",
        twitter: "https://twitter.com/beaverastigue",
        linkedin: "https://linkedin.com/in/beaverastigue",
        github: "https://github.com/beaverastigue"
      },
      {
        id: "crea-6",
        name: "Jessel Ann Piamonte",
        role: "Photography/Videography Officer",
        department: "CREATIVES",
        sy: "S.Y. 2025-2026",
        birthday: "May 21, 2001",
        email: "piamontejess@gmail.com",
        image: "includes/images/Photography videography Officer 1.jpg",
        responsibilities: "Lead creative and design initiatives.",
        fb: "https://facebook.com/jesselpiamonte",
        twitter: "https://twitter.com/jesselpiamonte",
        linkedin: "https://linkedin.com/in/jesselpiamonte",
        github: "https://github.com/jesselpiamonte"
      },
      {
        id: "crea-7",
        name: "Lee Suzane Necesario",
        role: "Social Media Manager",
        department: "CREATIVES",
        sy: "S.Y. 2025-2026",
        birthday: "May 21, 2001",
        email: "lee.necesario@ctu.edu.ph",
        image: "includes/images/Social Media Manager.jpg",
        responsibilities: "Lead creative and design initiatives.",
        fb: "https://facebook.com/leenecesario",
        twitter: "https://twitter.com/leenecesario",
        linkedin: "https://linkedin.com/in/leenecesario",
        github: "https://github.com/leenecesario"
      },
      {
        id: "crea-8",
        name: "Joseph Tejero",
        role: "Multimedia Lead",
        department: "CREATIVES",
        sy: "S.Y. 2025-2026",
        birthday: "May 21, 2001",
        email: "joseph.tejero@ctu.edu.ph",
        image: "includes/images/Multimedia Mnaager.jpg",
        responsibilities: "Lead creative and design initiatives.",
        fb: "https://facebook.com/josephTejero",
        twitter: "https://twitter.com/josephTejero",
        linkedin: "https://linkedin.com/in/josephTejero",
        github: "https://github.com/josephTejero"
      }
    ],
    finance: [
      {
        id: "fin-1",
        name: "Sean Humphrey Densing",
        role: "Auditor",
        department: "FINANCE",
        sy: "S.Y. 2025-2026",
        birthday: "February 14, 2000",
        email: "seandensing683@gmail.com",
        image: "includes/images/Auditor.jpg",
        responsibilities: "Manage budget and financial resources.",
        fb: "https://facebook.com/seandensing",
        twitter: "https://twitter.com/seandensing",
        linkedin: "https://linkedin.com/in/seandensing",
        github: "https://github.com/seandensing"
      },
      {
        id: "fin-2",
        name: "Archie Aligsao",
        role: "Finance Officer",
        department: "FINANCE",
        sy: "S.Y. 2025-2026",
        birthday: "February 14, 2000",
        email: "archie.aligsao@ctu.edu.ph",
        image: "includes/images/Finance Mnager.jpg",
        responsibilities: "Manage budget and financial resources.",
        fb: "https://facebook.com/archiealigsao",
        twitter: "https://twitter.com/archiealigsao",
        linkedin: "https://linkedin.com/in/archiealigsao",
        github: "https://github.com/archiealigsao"
      }
    ]
  },
  "2024-2025": {
    executive_board: []
  }
};

// =====================================
// RENDER OFFICERS FROM STATIC DATA
// =====================================

function renderOfficersFromStatic() {
  const yearGroups = document.querySelectorAll(".year-group");
  
  yearGroups.forEach((group) => {
    const year = group.dataset.year;
    const departments = staticOfficers[year] || {};
    const grids = group.querySelectorAll(".officers-grid");
    
    grids.forEach((grid) => {
      grid.innerHTML = "";
      
      let deptKey = grid.dataset.department;
      
      if (!deptKey) {
        const header = grid.closest(".department-group")?.querySelector(".department-header h3");
        if (header) {
          const deptText = header.textContent.trim().toLowerCase();
          if (deptText.includes("executive") || deptText.includes("campus organizer") || deptText.includes("chief")) {
            deptKey = "executive_board";
          } else if (deptText.includes("operations") || deptText.includes("volunteer") || deptText.includes("operation")) {
            deptKey = "operations";
          } else if (deptText.includes("technology") || deptText.includes("tech") || deptText.includes("developer")) {
            deptKey = "technology";
          } else if (deptText.includes("community") || deptText.includes("development")) {
            deptKey = "community";
          } else if (deptText.includes("creative") || deptText.includes("graphic") || deptText.includes("design")) {
            deptKey = "creatives";
          } else if (deptText.includes("finance") || deptText.includes("budget")) {
            deptKey = "finance";
          }
        }
      }
      
      const officers = departments[deptKey] || [];
      
      if (officers.length === 0) {
        grid.innerHTML = `
          <div class="officers-empty" style="grid-column:1/-1;">
            <div class="empty-content">
              <i class="fas fa-users-slash"></i>
              <h3>No Officers Available</h3>
              <p>Leadership team members will be announced soon.</p>
            </div>
          </div>
        `;
        return;
      }
      
      let html = "";
      officers.forEach((officer) => {
        let image = officer.image || "";
        
        if (!image || image === "") {
          image = "https://ui-avatars.com/api/?name=" + encodeURIComponent(officer.name) + "&background=4285F4&color=fff&size=300&bold=true";
        }
        
        html += `
          <div class="officer-card" data-officer="${officer.id}">
            <div class="officer-image-wrapper">
              <img src="${image}" alt="${officer.name}" class="officer-photo" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(officer.name)}&background=4285F4&color=fff&size=300&bold=true'">
              <div class="placeholder-blur" style="background: linear-gradient(135deg, #4285F4, #5F5CFF);"></div>
              <div class="officer-hover-info">
                <div class="hover-content">
                  <span class="hover-role">${officer.role}</span>
                  <h4>${officer.name}</h4>
                  <p><i class="fas fa-calendar-alt"></i> ${officer.sy || year}</p>
                  <div class="hover-socials">
                    <a href="${officer.fb || "#"}"><i class="fab fa-facebook-f"></i></a>
                    <a href="${officer.twitter || "#"}"><i class="fab fa-twitter"></i></a>
                    <a href="${officer.linkedin || "#"}"><i class="fab fa-linkedin-in"></i></a>
                    <a href="${officer.github || "#"}"><i class="fab fa-github"></i></a>
                  </div>
                  <span class="hover-click"><i class="fas fa-mouse-pointer"></i> View Profile</span>
                </div>
              </div>
            </div>
          </div>
        `;
      });
      
      grid.innerHTML = html;
    });
  });
  
  attachOfficerEvents();
}

// =====================================
// OFFICER CARD EVENTS
// =====================================

function attachOfficerEvents() {
  const officerCards = document.querySelectorAll(".officer-card");
  
  officerCards.forEach((card) => {
    card.removeEventListener("click", card._handler);
    
    const handler = function (e) {
      const officerKey = this.dataset.officer;
      openOfficerProfileFromStatic(officerKey);
    };
    
    card._handler = handler;
    card.addEventListener("click", handler);
  });
}

// =====================================
// OPEN OFFICER PROFILE FROM STATIC DATA
// =====================================

function openOfficerProfileFromStatic(officerKey) {
  let officerData = null;
  
  for (const year in staticOfficers) {
    for (const dept in staticOfficers[year]) {
      const found = staticOfficers[year][dept].find((o) => o.id === officerKey);
      if (found) {
        officerData = found;
        break;
      }
    }
    if (officerData) break;
  }
  
  if (!officerData) {
    console.error("Officer not found:", officerKey);
    return;
  }
  
  const modal = document.getElementById("officerModal");
  if (!modal) return;
  
  let image = officerData.image || "";
  
  if (!image || image === "") {
    image = "https://ui-avatars.com/api/?name=" + encodeURIComponent(officerData.name) + "&background=4285F4&color=fff&size=300&bold=true";
  }
  
  document.getElementById("modalImage").src = image;
  document.getElementById("modalImage").alt = officerData.name;
  document.getElementById("modalBadge").textContent = officerData.department || "";
  document.getElementById("modalName").textContent = officerData.name;
  document.getElementById("modalRole").textContent = officerData.role;
  document.getElementById("modalSY").textContent = officerData.sy || "";
  document.getElementById("modalBirthday").textContent = officerData.birthday || "Not specified";
  document.getElementById("modalResponsibilities").textContent = officerData.responsibilities || "";
  document.getElementById("modalEmail").textContent = officerData.email || "";
  
  document.getElementById("modalFb").href = officerData.fb || "#";
  document.getElementById("modalTwitter").href = officerData.twitter || "#";
  document.getElementById("modalLinkedin").href = officerData.linkedin || "#";
  document.getElementById("modalGithub").href = officerData.github || "#";
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// =====================================
// OFFICER MODAL CLOSE
// =====================================

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("officerModal");
  const closeBtn = document.getElementById("modalClose");
  const overlay = document.querySelector(".modal-overlay");
  
  function closeModal() {
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
  
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay) overlay.addEventListener("click", closeModal);
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closeModal();
    }
  });
  
  renderOfficersFromStatic();
});

// =====================================
// SCROLL SPY - ACTIVE NAV LINK
// =====================================

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a, .dropdown-menu a");
  
  function updateActiveLink() {
    let currentSection = "";
    const scrollPosition = window.scrollY + 120;
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });
    
    navLinks.forEach((link) => link.classList.remove("active"));
    
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  }
  
  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
});

// ==========================================
// API CONFIGURATION (For other sections)
// ==========================================

const API_BASE = "admin/api/";
const API_GET = API_BASE + "get-data.php";
const API_SAVE = API_BASE + "save-data.php";
const BASE_URL = "";

// ==========================================
// GALLERY - STATIC DATA
// ==========================================

const staticGallery = [
  {
    title: "Google Cloud Workshop",
    category: "workshop",
    date: "June 15, 2024",
    venue: "CTU Main Campus",
    description: "Hands-on workshop on Google Cloud Platform for students.",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    title: "TechConnect 2024",
    category: "event",
    date: "March 10, 2024",
    venue: "CTU Auditorium",
    description: "Our flagship event bringing together students and industry professionals.",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    title: "Android Bootcamp",
    category: "bootcamp",
    date: "August 20, 2024",
    venue: "CTU Main Campus",
    description: "Intensive 3-day bootcamp on Android app development.",
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    title: "GDG Community Meetup",
    category: "community",
    date: "September 5, 2024",
    venue: "CTU Main Campus",
    description: "Monthly community meetup for developers and tech enthusiasts.",
    image: "https://picsum.photos/600/400?random=4"
  }
];

let galleryFilter = "all";

function renderGallery(filter = "all") {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  
  let filtered = staticGallery;
  if (filter !== "all") {
    filtered = staticGallery.filter((item) => item.category === filter);
  }
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="gallery-empty">
        <i class="fas fa-images"></i>
        <h3>No Photos Available</h3>
        <p>Gallery content will be available soon.</p>
      </div>
    `;
    return;
  }
  
  let html = "";
  filtered.forEach((item, index) => {
    const label = item.category.charAt(0).toUpperCase() + item.category.slice(1);
    
    html += `
      <div class="gallery-card ${item.category}" data-index="${index}">
        <div class="gallery-card-image">
          <img src="${item.image}" alt="${item.title}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(item.title)}&background=4285F4&color=fff&size=300&bold=true'">
          <div class="gallery-card-overlay">
            <div class="gallery-card-content">
              <span class="gallery-card-category">${label}</span>
              <h3>${item.title}</h3>
              <p>${item.description ? item.description.substring(0, 80) + (item.description.length > 80 ? "..." : "") : ""}</p>
              <div class="gallery-card-meta">
                <span><i class="fas fa-calendar-alt"></i> ${item.date || ""}</span>
              </div>
              <button class="gallery-card-btn" data-index="${index}">
                <span>View Details</span>
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="gallery-card-footer">
          <span class="card-title">${item.title}</span>
          <span class="card-category">${label}</span>
        </div>
      </div>
    `;
  });
  
  grid.innerHTML = html;
  
  document.querySelectorAll(".gallery-card-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const index = parseInt(this.dataset.index);
      const data = filtered[index];
      if (data) openGalleryModal(data);
    });
  });
  
  document.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", function () {
      const index = parseInt(this.dataset.index);
      const data = filtered[index];
      if (data) openGalleryModal(data);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      galleryFilter = this.dataset.filter;
      renderGallery(galleryFilter);
    });
  });
  renderGallery(galleryFilter);
});

function openGalleryModal(data) {
  const modal = document.getElementById("galleryModal");
  if (!modal) return;
  
  document.getElementById("galleryModalImage").src = data.image;
  document.getElementById("galleryModalTitle").textContent = data.title;
  document.getElementById("galleryModalDescription").textContent = data.description || "";
  document.getElementById("galleryModalCategory").textContent = data.category ? data.category.charAt(0).toUpperCase() + data.category.slice(1) : "";
  document.getElementById("galleryModalDate").textContent = data.date || "";
  document.getElementById("galleryModalVenue").textContent = data.venue || "";
  document.getElementById("galleryModalDateDetail").textContent = data.date || "";
  document.getElementById("galleryModalVenueDetail").textContent = data.venue || "";
  document.getElementById("galleryModalTypeDetail").textContent = data.category ? data.category.charAt(0).toUpperCase() + data.category.slice(1) : "";
  document.getElementById("galleryModalDescDetail").textContent = data.description || "";
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeGalleryModal() {
  const modal = document.getElementById("galleryModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("galleryModalClose");
  const modal = document.getElementById("galleryModal");
  const overlay = document.querySelector(".gallery-modal-overlay");
  
  if (closeBtn) closeBtn.addEventListener("click", closeGalleryModal);
  if (overlay) overlay.addEventListener("click", closeGalleryModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeGalleryModal();
  });
});

// ==========================================
// EVENTS - STATIC DATA
// ==========================================

const staticEvents = [
  {
    title: "Google Cloud Workshop",
    category: "Workshop",
    status: "upcoming",
    date: "June 15, 2024",
    time: "9:00 AM - 5:00 PM",
    venue: "CTU Main Campus",
    venue_type: "offline",
    online_link: "",
    slots: "50 slots",
    description: "Learn the basics of Google Cloud Platform and build your first cloud application.",
    registration_link: "#",
    speakers: [
      { name: "John Doe", role: "Google Cloud Expert" },
      { name: "Jane Smith", role: "GDG Lead" }
    ],
    image: "https://picsum.photos/600/400?random=10"
  },
  {
    title: "GDG Hackathon 2024",
    category: "Hackathon",
    status: "ongoing",
    date: "June 20, 2024",
    time: "8:00 AM - 8:00 PM",
    venue: "Online",
    venue_type: "online",
    online_link: "https://meet.google.com/xxx",
    slots: "Unlimited",
    description: "24-hour hackathon to build innovative solutions for real-world problems.",
    registration_link: "#",
    speakers: [
      { name: "Mark Johnson", role: "Hackathon Mentor" }
    ],
    image: "https://picsum.photos/600/400?random=11"
  },
  {
    title: "Tech Talk: Future of AI",
    category: "Tech Talk",
    status: "past",
    date: "May 10, 2024",
    time: "2:00 PM - 5:00 PM",
    venue: "CTU Auditorium",
    venue_type: "offline",
    online_link: "",
    slots: "100 slots",
    description: "Industry experts discuss the future of artificial intelligence and machine learning.",
    registration_link: "#",
    speakers: [
      { name: "Dr. Alan Turing", role: "AI Researcher" }
    ],
    image: "https://picsum.photos/600/400?random=12"
  }
];

function renderEvents() {
  const grid = document.getElementById("eventsGrid");
  if (!grid) return;
  
  if (staticEvents.length === 0) {
    grid.innerHTML = `
      <div class="gallery-empty" style="grid-column:1/-1;">
        <i class="fas fa-calendar-alt"></i>
        <h3>No Events Scheduled</h3>
        <p>Upcoming events will be announced soon.</p>
      </div>
    `;
    return;
  }
  
  const statusColors = { ongoing: "#34A853", upcoming: "#4285F4", past: "#888" };
  const statusLabels = { ongoing: "Ongoing", upcoming: "Upcoming", past: "Finished" };
  const venueIcons = { online: "fa-wifi", offline: "fa-map-marker-alt", hybrid: "fa-globe" };
  
  let html = "";
  staticEvents.forEach((item, index) => {
    const speakers = item.speakers || [];
    let speakersHtml = "";
    if (speakers.length > 0) {
      speakersHtml = speakers.map(s => `<span class="speaker-tag">${s.name}${s.role ? " · " + s.role : ""}</span>`).join("");
    }
    
    const venueType = item.venue_type || "offline";
    const venueIcon = venueIcons[venueType] || "fa-map-marker-alt";
    const venueLabel = venueType === "online" ? "Online" : venueType === "hybrid" ? "Hybrid" : "In-Person";
    
    html += `
      <div class="event-card" data-status="${item.status || "upcoming"}" data-index="${index}">
        <div class="event-card-inner">
          <div class="event-banner">
            <img src="${item.image}" alt="${item.title}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(item.title)}&background=4285F4&color=fff&size=300&bold=true'">
            <span class="event-badge ${item.status || "upcoming"}" style="background:${statusColors[item.status] || "#4285F4"}">
              <i class="fas ${item.status === "ongoing" ? "fa-circle" : item.status === "upcoming" ? "fa-calendar-alt" : "fa-check-circle"}"></i> 
              ${statusLabels[item.status] || "Upcoming"}
            </span>
            <span class="event-venue-badge" style="position:absolute;bottom:14px;right:14px;padding:4px 12px;border-radius:50px;background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);color:#fff;font-size:10px;font-weight:500;display:flex;align-items:center;gap:6px;z-index:2;">
              <i class="fas ${venueIcon}"></i> ${venueLabel}
            </span>
            <div class="event-hover-info">
              <div class="event-hover-content">
                <span class="event-category">
                  <i class="fas ${item.category === "Workshop" ? "fa-code" : item.category === "Hackathon" ? "fa-laptop-code" : item.category === "Tech Talk" ? "fa-cloud" : "fa-users"}"></i> 
                  ${item.category || "Event"}
                </span>
                <h3>${item.title}</h3>
                <p>${item.description || ""}</p>
                ${speakersHtml ? `<div class="event-speakers" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;">${speakersHtml}</div>` : ""}
                <div class="event-meta">
                  <span><i class="fas fa-calendar-alt"></i> ${item.date || ""}</span>
                  <span><i class="fas fa-clock"></i> ${item.time || ""}</span>
                  <span><i class="fas ${venueIcon}"></i> ${item.venue || item.online_link || "TBA"}</span>
                  <span><i class="fas fa-users"></i> ${item.slots || "Unlimited"}</span>
                </div>
                <div style="display:flex;gap:10px;flex-wrap:wrap;">
                  ${item.registration_link ? `<a href="${item.registration_link}" target="_blank" class="event-btn" style="text-decoration:none;">
                    ${item.status === "past" ? "View Recap" : "Register Now"} 
                    <i class="fas fa-arrow-right"></i>
                  </a>` : ""}
                  ${item.online_link && item.venue_type !== "offline" ? `<a href="${item.online_link}" target="_blank" class="event-btn" style="background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);text-decoration:none;">
                    <i class="fas fa-video"></i> Join Online
                  </a>` : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  grid.innerHTML = html;
  
  document.querySelectorAll(".event-card").forEach((card) => {
    card.addEventListener("click", function () {
      const index = parseInt(this.dataset.index);
      openEventModal(index);
    });
  });
}

function openEventModal(index) {
  const data = staticEvents[index];
  if (!data) return;
  
  const modal = document.getElementById("eventModal");
  if (!modal) return;
  
  document.getElementById("eventModalImage").src = data.image || "https://ui-avatars.com/api/?name=Event&background=4285F4&color=fff&size=300&bold=true";
  document.getElementById("eventModalImage").alt = data.title;
  
  const badge = document.getElementById("eventModalBadge");
  const statusColors = { ongoing: "#34A853", upcoming: "#4285F4", past: "#888" };
  const statusLabels = { ongoing: "Ongoing", upcoming: "Upcoming", past: "Finished" };
  badge.textContent = statusLabels[data.status] || "Upcoming";
  badge.style.background = statusColors[data.status] || "#4285F4";
  
  const venueType = data.venue_type || "offline";
  const venueIcons = { online: "fa-wifi", offline: "fa-map-marker-alt", hybrid: "fa-globe" };
  const venueLabels = { online: "Online", offline: "In-Person", hybrid: "Hybrid" };
  
  const venueIconEl = document.getElementById("eventModalVenueIcon");
  const venueTypeEl = document.getElementById("eventModalVenueType");
  const venueBadgeEl = document.getElementById("eventModalVenueBadge");
  
  if (venueIconEl) venueIconEl.className = "fas " + (venueIcons[venueType] || "fa-map-marker-alt");
  if (venueTypeEl) venueTypeEl.textContent = venueLabels[venueType] || "In-Person";
  if (venueBadgeEl) venueBadgeEl.style.display = "flex";
  
  document.getElementById("eventModalCategory").textContent = data.category || "Event";
  document.getElementById("eventModalTitle").textContent = data.title;
  document.getElementById("eventModalDescription").textContent = data.description || "No description available.";
  document.getElementById("eventModalDate").textContent = data.date || "TBA";
  document.getElementById("eventModalTime").textContent = data.time || "TBA";
  
  let venueDisplay = data.venue || "TBA";
  if (venueType === "online" && data.online_link) {
    venueDisplay = "Online Event";
  } else if (venueType === "hybrid") {
    venueDisplay = data.venue ? data.venue + " + Online" : "Hybrid Event";
  }
  document.getElementById("eventModalVenue").textContent = venueDisplay;
  document.getElementById("eventModalSlots").textContent = data.slots || "Unlimited";
  
  const onlineBox = document.getElementById("eventModalOnlineBox");
  const onlineLink = document.getElementById("eventModalOnlineLink");
  if (onlineBox && onlineLink) {
    if (data.online_link && venueType !== "offline") {
      onlineBox.style.display = "block";
      onlineLink.innerHTML = `<a href="${data.online_link}" target="_blank" style="color:#4285F4;text-decoration:none;">${data.online_link}</a>`;
    } else {
      onlineBox.style.display = "none";
    }
  }
  
  const regBox = document.getElementById("eventModalRegBox");
  const regLink = document.getElementById("eventModalRegLink");
  const registerBtn = document.getElementById("eventRegisterBtn");
  if (regBox && regLink && registerBtn) {
    if (data.registration_link) {
      regBox.style.display = "block";
      regLink.innerHTML = `<a href="${data.registration_link}" target="_blank" style="color:#4285F4;text-decoration:none;">Register Here</a>`;
      registerBtn.href = data.registration_link;
      registerBtn.style.display = "flex";
    } else {
      regBox.style.display = "none";
      registerBtn.style.display = "none";
    }
  }
  
  const speakersContainer = document.getElementById("eventSpeakersContainer");
  const speakerSingle = document.getElementById("eventSpeakerSingle");
  const speakersSection = document.getElementById("eventSpeakersSection");
  
  const speakers = data.speakers || [];
  
  if (speakersContainer && speakersSection && speakerSingle) {
    if (speakers.length > 0) {
      speakersSection.style.display = "block";
      speakerSingle.style.display = "none";
      
      let speakersHtml = "";
      speakers.forEach((s) => {
        const imgSrc = s.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=4285F4&color=fff&size=200&bold=true`;
        speakersHtml += `
          <div class="speaker-item-modal" style="display:flex;align-items:center;gap:16px;padding:12px 16px;background:rgba(255,255,255,0.04);border-radius:12px;border:1px solid rgba(255,255,255,0.04);margin-bottom:10px;">
            <img src="${imgSrc}" alt="${s.name}" style="width:50px;height:50px;border-radius:50%;object-fit:cover;border:2px solid #4285F4;flex-shrink:0;" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=4285F4&color=fff&size=200&bold=true'">
            <div>
              <h4 style="color:#fff;font-size:16px;font-weight:600;margin:0;">${s.name}</h4>
              <p style="color:rgba(255,255,255,0.5);font-size:13px;margin:0;">${s.role || "Speaker"}</p>
            </div>
          </div>
        `;
      });
      speakersContainer.innerHTML = speakersHtml;
    } else {
      speakersSection.style.display = "none";
      speakerSingle.style.display = "none";
    }
  }
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeEventModal() {
  const modal = document.getElementById("eventModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("eventModalClose");
  const modal = document.getElementById("eventModal");
  const overlay = document.querySelector(".event-modal-overlay");
  
  if (closeBtn) closeBtn.addEventListener("click", closeEventModal);
  if (overlay) overlay.addEventListener("click", closeEventModal);
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closeEventModal();
    }
  });
  
  document.getElementById("eventShareBtn")?.addEventListener("click", function () {
    const title = document.getElementById("eventModalTitle")?.textContent || "GDG CTU Event";
    if (navigator.share) {
      navigator.share({
        title: title,
        text: "Check out this GDG CTU event!",
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href).then(() => {
        showNotification("Link copied to clipboard!", "success");
      }).catch(() => {
        alert("Share this event: " + window.location.href);
      });
    }
  });
  
  renderEvents();
});

// ==========================================
// FAQ - STATIC DATA
// ==========================================

const staticFaq = [
  {
    question: "What is GDG On Campus CTU?",
    category: "general",
    answer: "GDG On Campus CTU is a student-led technology community at Cebu Technological University that empowers aspiring developers through workshops, hackathons, collaborative projects, and networking events powered by Google technologies."
  },
  {
    question: "How can I become a member?",
    category: "membership",
    answer: "You can become a member by signing up through our registration form. All students of Cebu Technological University are welcome to join! Just click the 'Join Us' button above."
  },
  {
    question: "What activities does GDG CTU organize?",
    category: "activities",
    answer: "We organize workshops, hackathons, tech talks, bootcamps, study jams, and community meetups. All activities are designed to help students learn new technologies and build their skills."
  },
  {
    question: "What are the benefits of joining?",
    category: "benefits",
    answer: "Members get access to exclusive workshops, networking opportunities with industry professionals, project collaboration, Google resources, certificates, and a supportive community of tech enthusiasts."
  },
  {
    question: "Do I need to know how to code?",
    category: "general",
    answer: "Not at all! We welcome everyone regardless of skill level. Our activities are designed for beginners to advanced learners. We believe in learning together and helping each other grow."
  }
];

let faqFilter = "all";

function renderFAQ(filter = "all") {
  const grid = document.getElementById("faqGrid");
  if (!grid) return;
  
  let filtered = staticFaq;
  if (filter !== "all") {
    filtered = staticFaq.filter((item) => item.category === filter);
  }
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="faq-empty">
        <i class="fas fa-question-circle"></i>
        <h3>No FAQ Available</h3>
        <p>Frequently asked questions will be posted soon.</p>
      </div>
    `;
    return;
  }
  
  let html = "";
  filtered.forEach((item, index) => {
    const label = item.category.charAt(0).toUpperCase() + item.category.slice(1);
    html += `
      <div class="faq-item" data-category="${item.category}">
        <div class="faq-question" data-index="${index}">
          <div class="faq-question-left">
            <span class="faq-category-tag">${label}</span>
            <h3>${item.question}</h3>
          </div>
          <div class="faq-question-right">
            <i class="fas fa-chevron-down faq-arrow"></i>
          </div>
        </div>
        <div class="faq-answer">
          <p>
            <i class="fas fa-check-circle faq-check"></i>
            ${item.answer}
          </p>
        </div>
      </div>
    `;
  });
  
  grid.innerHTML = html;
  
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    
    question.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      
      const parent = this.closest(".faq-item");
      const isActive = parent.classList.contains("active");
      
      document.querySelectorAll(".faq-item").forEach((other) => {
        if (other !== parent) {
          other.classList.remove("active");
        }
      });
      
      if (!isActive) {
        parent.classList.add("active");
      } else {
        parent.classList.remove("active");
      }
    });
  });
  
  if (filter === "all" && document.querySelectorAll(".faq-item").length > 0) {
    document.querySelectorAll(".faq-item")[0].classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".faq-filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      faqFilter = this.dataset.filter;
      renderFAQ(faqFilter);
    });
  });
  renderFAQ(faqFilter);
});

// ==========================================
// MERCH - STATIC DATA
// ==========================================

const staticMerch = [
  {
    name: "GDG T-Shirt",
    description: "Premium quality cotton shirt with GDG logo.",
    price: "₱500",
    badge: "Limited",
    orderLink: "#",
    image: "https://picsum.photos/400/400?random=20"
  },
  {
    name: "GDG Hoodie",
    description: "Comfortable hoodie for the cold weather.",
    price: "₱800",
    badge: "New",
    orderLink: "#",
    image: "https://picsum.photos/400/400?random=21"
  },
  {
    name: "GDG Sticker Pack",
    description: "Collectible stickers for your laptop.",
    price: "₱100",
    badge: "",
    orderLink: "#",
    image: "https://picsum.photos/400/400?random=22"
  }
];

function renderMerch() {
  const grid = document.getElementById("merchGrid");
  if (!grid) return;
  
  if (staticMerch.length === 0) {
    grid.innerHTML = `
      <div class="gallery-empty" style="grid-column:1/-1;">
        <i class="fas fa-shopping-bag"></i>
        <h3>No Merchandise Available</h3>
        <p>Official merchandise will be available soon.</p>
      </div>
    `;
    return;
  }
  
  let html = "";
  staticMerch.forEach((item) => {
    html += `
      <div class="merch-card">
        <div class="merch-photo">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=4285F4&color=fff&size=300&bold=true'">
          ${item.badge ? `<span class="merch-badge">${item.badge}</span>` : ""}
        </div>
        <div class="merch-overlay">
          <h3>${item.name}</h3>
          <p>${item.description || ""}</p>
          <span class="price">${item.price || "₱0"}</span>
          <a href="${item.orderLink || "#"}" target="_blank" class="order-btn">
            Order Now
          </a>
        </div>
      </div>
    `;
  });
  
  grid.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
  renderMerch();
});

// ==========================================
// PARTNERS - STATIC DATA
// ==========================================

const staticPartners = [
  {
    name: "Google",
    role: "Technology Partner",
    image: "https://ui-avatars.com/api/?name=Google&background=4285F4&color=fff&size=200&bold=true"
  },
  {
    name: "Microsoft",
    role: "Technology Partner",
    image: "https://ui-avatars.com/api/?name=Microsoft&background=EA4335&color=fff&size=200&bold=true"
  },
  {
    name: "AWS",
    role: "Cloud Partner",
    image: "https://ui-avatars.com/api/?name=AWS&background=FBBC05&color=fff&size=200&bold=true"
  },
  {
    name: "GitHub",
    role: "Developer Partner",
    image: "https://ui-avatars.com/api/?name=GitHub&background=34A853&color=fff&size=200&bold=true"
  }
];

function renderPartners() {
  const grid = document.getElementById("partnersGrid");
  if (!grid) return;
  
  if (staticPartners.length === 0) {
    grid.innerHTML = `
      <div class="gallery-empty" style="grid-column:1/-1;">
        <i class="fas fa-handshake"></i>
        <h3>No Partners Yet</h3>
        <p>Partnership announcements coming soon.</p>
      </div>
    `;
    return;
  }
  
  let html = "";
  staticPartners.forEach((item) => {
    html += `
      <div class="partner-card">
        <div class="partner-image">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=4285F4&color=fff&size=200&bold=true'">
        </div>
        <div class="partner-overlay">
          <h3>${item.name}</h3>
          <p>${item.role || ""}</p>
        </div>
      </div>
    `;
  });
  
  grid.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
  renderPartners();
});

// ==========================================
// LOADING SCREEN
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");
  const loadingStatus = document.getElementById("loadingStatus");
  const loadingError = document.getElementById("loadingError");
  const retryBtn = document.getElementById("retryBtn");
  
  let hideTimeout = null;
  let isOnline = navigator.onLine;
  
  function checkInternet() {
    isOnline = navigator.onLine;
    if (!isOnline) {
      showNoInternet();
    } else {
      hideLoading();
    }
  }
  
  function showNoInternet() {
    loadingStatus.style.display = "none";
    loadingError.classList.add("show");
    loadingScreen.classList.remove("hide");
  }
  
  function hideLoading() {
    loadingError.classList.remove("show");
    loadingStatus.style.display = "block";
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(function () {
      loadingScreen.classList.add("hide");
      if (mainContent) {
        mainContent.classList.add("show");
      }
    }, 500);
  }
  
  function retryConnection() {
    loadingError.classList.remove("show");
    loadingStatus.style.display = "block";
    loadingStatus.textContent = "Reconnecting...";
    setTimeout(function () {
      if (navigator.onLine) {
        loadingStatus.textContent = "Connected!";
        setTimeout(hideLoading, 500);
      } else {
        loadingStatus.textContent = "Loading...";
        showNoInternet();
      }
    }, 1000);
  }
  
  window.addEventListener("online", function () {
    loadingStatus.textContent = "Connected!";
    setTimeout(hideLoading, 500);
  });
  window.addEventListener("offline", showNoInternet);
  
  if (retryBtn) {
    retryBtn.addEventListener("click", retryConnection);
  }
  
  checkInternet();
  
  window.addEventListener("load", function () {
    if (navigator.onLine && loadingScreen && !loadingScreen.classList.contains("hide")) {
      setTimeout(hideLoading, 500);
    }
  });
  
  setInterval(function () {
    if (loadingScreen && !loadingScreen.classList.contains("hide")) {
      checkInternet();
    }
  }, 5000);
});

// ==========================================
// THEME TOGGLE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  
  if (!themeToggle) return;
  
  const savedTheme = localStorage.getItem("gdgTheme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateIcon(savedTheme);
  
  themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("gdgTheme", newTheme);
    updateIcon(newTheme);
  });
  
  function updateIcon(theme) {
    if (theme === "dark") {
      themeIcon.className = "fa-solid fa-sun";
      themeToggle.title = "Switch to Light Mode";
    } else {
      themeIcon.className = "fa-solid fa-moon";
      themeToggle.title = "Switch to Dark Mode";
    }
  }
});

// ==========================================
// HAMBURGER MENU TOGGLE - WITH SWIPE & CLOSE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const body = document.body;

  let overlay = document.querySelector(".nav-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    document.body.appendChild(overlay);
  }

  function toggleMenu() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    body.style.overflow = "";
  }

  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  overlay.addEventListener("click", closeMenu);

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
      closeMenu();
    }
  });

  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  document.addEventListener(
    "touchend",
    function (e) {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchStartX - touchEndX;
      if (swipeDistance > 80 && navLinks.classList.contains("active")) {
        closeMenu();
      }
    },
    { passive: true }
  );
});

// ==========================================
// NOTIFICATION HELPER
// ==========================================

function showNotification(message, type = "info") {
  let container = document.getElementById("notificationContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "notificationContainer";
    container.style.cssText = "position:fixed;bottom:20px;right:20px;z-index:999999;display:flex;flex-direction:column;gap:10px;max-width:380px;";
    document.body.appendChild(container);
  }
  
  const notification = document.createElement("div");
  notification.style.cssText = `
    background: var(--bg-card, #ffffff);
    backdrop-filter: blur(20px);
    padding: 14px 20px;
    border-radius: 12px;
    box-shadow: 0 15px 50px rgba(0,0,0,0.12);
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: var(--text-primary, #202124);
    animation: slideInRight 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    display: flex;
    align-items: center;
    gap: 12px;
    border-left: 4px solid ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#4285F4"};
    font-weight: 500;
    border: 1px solid var(--border-color, #eef2f7);
  `;
  
  const icon = document.createElement("i");
  icon.className = type === "success" ? "fas fa-check-circle" : type === "error" ? "fas fa-exclamation-circle" : "fas fa-info-circle";
  icon.style.color = type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#4285F4";
  icon.style.fontSize = "20px";
  
  const text = document.createElement("span");
  text.textContent = message;
  
  notification.appendChild(icon);
  notification.appendChild(text);
  container.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100px)";
    notification.style.transition = "0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}
