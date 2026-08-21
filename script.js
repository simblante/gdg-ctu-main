// =====================================
// YEAR SELECTOR - OFFICERS
// =====================================

document.addEventListener("DOMContentLoaded", function () {
  const yearButtons = document.querySelectorAll(".year-btn");
  const yearGroups = document.querySelectorAll(".year-group");

  if (yearButtons.length === 0) {
    return;
  }

  const defaultYear = "2026-2027";
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
        image: "includes/images/Consultant - Copy.jpg",
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
        image: "includes/images/Volunteer Management Lead - Copy.jpg",
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
        role: "Chief-Technology-Officer",
        department: "TECHNOLOGY",
        sy: "S.Y. 2025-2026",
        birthday: "April 18, 2000",
        email: "james.nino.tan@ctu.edu.ph",
        image: "includes/images/Chief-Technology-Officer.jpg",
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
        image: "includes/images/WebDevelopementLead - Copy.jpg",
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
        image: "includes/images/Cybersecurity Lead - Copy.jpg",
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
        image: "includes/images/Mobile Development Lead - Copy.jpg",
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
        image: "includes/images/External Relations Lead.jpg",
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
        image: "includes/images/UI UX LEAD - Copy.jpg",
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
        image: "includes/images/AI AND ML LEAD.jpg",
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
        image: "includes/images/Game Developement Lead - Copy.jpg",
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
        image: "includes/images/Web Dev Associate Lead - Copy.jpg",
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
        image: "includes/images/Web Dev Associate Lead 1 - Copy.jpg",
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
        image: "includes/images/Technical Project Lead - Copy.jpg",
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
        image: "includes/images/Data science and analysis associate - Copy.jpg",
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
        image: "includes/images/External Relation Lead - Copy.jpg",
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
        image: "includes/images/Photography videography Officer - Copy.jpg",
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
        image: "includes/images/Photography videography Officer 1 - Copy.jpg",
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
// GALLERY - WITH ALBUM FEATURE & SLIDER
// ==========================================

// Static gallery data with multiple photos per album
const galleryAlbums = [
    {
        id: 0,
        title: "HackIT The IBPAP Challenge",
        category: "Hackathon",
        date: "August 17, 2026",
        venue: "Cebu Institute of Technology – University",
        description: "5 students amazing from Cebu Technological University - Main Campus and most of them are serving as officers of Google Developer Groups on Campus – CTU (GDGoC-CTU).",
        cover: "includes/images/gallery/1.jpg",
        photos: [
            "includes/images/gallery/1.jpg"
        ]
    },
    {
        id: 1,
        title: "DevFest Cebu 2025 ",
        category: "event",
        date: "November 30, 2025",
        venue: " Golden Peak Hotel & Suites",
        description: "GDGoC CTU is proud to have been a partner for DevFest Cebu 2025 yesterday. We loved soaking up all the knowledge and vibing with the amazing Cebu tech community.",
        cover: "includes/images/gallery/gdgdev4.jpg",
        photos: [
            "includes/images/gallery/gdgdev2.jpg",
            "includes/images/gallery/gdgdev3.jpg",
            "includes/images/gallery/gdgdev4.jpg",
            "includes/images/gallery/gdgdev5.jpg",
            "includes/images/gallery/gdgdev1.jpg"
            
        ]
    },
    {
        id: 2,
        title: "  GDGoC-CTU Jam 1",
        category: "Event",
        date: "November 10, 2025",
        venue: "Online",
        description: "We’re honestly speechless. This event was more than just a jam; it was a sign of huge progress for our developer community at CTU and the entire local game jam scene. The sheer talent, creativity, and passion on display were truly inspiring.",
        cover: "includes/images/gallery/JAM1.jpg",
        photos: [
            "includes/images/gallery/JAM1.jpg",
            "includes/images/gallery/JAM2.jpg",
            "includes/images/gallery/JAM3.jpg",
            "includes/images/gallery/JAM4.jpg"
        ]
    },
];

let currentAlbum = null;
let currentPhotoIndex = 0;
let galleryFilter = "all";

// ==========================================
// RENDER GALLERY CARDS
// ==========================================

function renderGallery(filter = "all") {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;

    let filtered = galleryAlbums;
    if (filter !== "all") {
        filtered = galleryAlbums.filter((album) => album.category === filter);
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="gallery-empty">
                <i class="fas fa-images"></i>
                <h3>No Albums Available</h3>
                <p>Gallery content will be available soon.</p>
            </div>
        `;
        return;
    }

    let html = "";
    filtered.forEach((album) => {
        const label = album.category.charAt(0).toUpperCase() + album.category.slice(1);
        const photoCount = album.photos ? album.photos.length : 0;

        html += `
            <div class="gallery-card ${album.category}" data-album="${album.id}">
                <div class="gallery-card-image">
                    <img src="${album.cover}" alt="${album.title}" onerror="this.src='https://picsum.photos/600/400?random=${album.id + 10}'">
                    <div class="gallery-card-overlay">
                        <div class="gallery-card-content">
                            <span class="gallery-card-category">${label}</span>
                            <h3>${album.title}</h3>
                            <p>${album.description ? album.description.substring(0, 80) + (album.description.length > 80 ? "..." : "") : ""}</p>
                            <div class="gallery-card-meta">
                                <span><i class="fas fa-calendar-alt"></i> ${album.date || ""}</span>
                                <span><i class="fas fa-images"></i> ${photoCount} Photos</span>
                            </div>
                            <button class="gallery-card-btn" data-album="${album.id}">
                                <span>View Album</span>
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="gallery-card-footer">
                    <span class="card-title">${album.title}</span>
                    <span class="card-category">${label}</span>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;

    // Add click events
    document.querySelectorAll(".gallery-card-btn").forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            const albumId = parseInt(this.dataset.album);
            openGalleryAlbum(albumId);
        });
    });

    document.querySelectorAll(".gallery-card").forEach((card) => {
        card.addEventListener("click", function () {
            const albumId = parseInt(this.dataset.album);
            if (!isNaN(albumId)) {
                openGalleryAlbum(albumId);
            }
        });
    });
}

// ==========================================
// OPEN GALLERY ALBUM
// ==========================================

function openGalleryAlbum(albumId) {
    const album = galleryAlbums.find((a) => a.id === albumId);
    if (!album) return;

    currentAlbum = album;
    currentPhotoIndex = 0;

    const modal = document.getElementById("galleryModal");
    if (!modal) return;

    // Set album info
    const label = album.category.charAt(0).toUpperCase() + album.category.slice(1);
    document.getElementById("galleryModalCategory").textContent = label;
    document.getElementById("galleryModalTitle").textContent = album.title;
    document.getElementById("galleryModalDescription").textContent = album.description || "";
    document.getElementById("galleryModalDate").textContent = album.date || "";
    document.getElementById("galleryModalVenue").textContent = album.venue || "";
    document.getElementById("galleryModalDateDetail").textContent = album.date || "";
    document.getElementById("galleryModalVenueDetail").textContent = album.venue || "";
    document.getElementById("galleryModalTypeDetail").textContent = label;

    // Set photos
    const photos = album.photos || [album.cover];
    const totalPhotos = photos.length;

    // Update photo count
    const photoCountEl = document.getElementById("galleryModalPhotoCount");
    if (photoCountEl) {
        photoCountEl.textContent = totalPhotos + " photos";
    }

    // Set main image
    updateGalleryImage(0);

    // Update counter
    document.getElementById("galleryImageCounter").textContent = `1 / ${totalPhotos}`;

    // Generate thumbnails
    const thumbnailsContainer = document.getElementById("galleryThumbnails");
    if (thumbnailsContainer) {
        let thumbHtml = "";
        photos.forEach((photo, index) => {
            thumbHtml += `
                <div class="gallery-thumbnail ${index === 0 ? "active" : ""}" data-index="${index}">
                    <img src="${photo}" alt="Thumbnail ${index + 1}" onerror="this.src='https://picsum.photos/80/60?random=${index + 100}'">
                </div>
            `;
        });
        thumbnailsContainer.innerHTML = thumbHtml;

        // Thumbnail click events
        thumbnailsContainer.querySelectorAll(".gallery-thumbnail").forEach((thumb) => {
            thumb.addEventListener("click", function () {
                const index = parseInt(this.dataset.index);
                currentPhotoIndex = index;
                updateGalleryImage(index);
            });
        });
    }

    // Show/hide navigation buttons
    const prevBtn = document.getElementById("galleryPrev");
    const nextBtn = document.getElementById("galleryNext");
    if (prevBtn) prevBtn.style.display = totalPhotos > 1 ? "flex" : "none";
    if (nextBtn) nextBtn.style.display = totalPhotos > 1 ? "flex" : "none";

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// ==========================================
// UPDATE GALLERY IMAGE
// ==========================================

function updateGalleryImage(index) {
    const photos = currentAlbum.photos || [currentAlbum.cover];
    if (index < 0) index = photos.length - 1;
    if (index >= photos.length) index = 0;

    currentPhotoIndex = index;

    // Update main image
    const mainImage = document.getElementById("galleryModalImage");
    if (mainImage) {
        mainImage.src = photos[index];
        mainImage.alt = currentAlbum.title + " - Photo " + (index + 1);
        mainImage.onerror = function () {
            this.src = "https://picsum.photos/600/400?random=" + (index + 50);
        };
    }

    // Update counter
    document.getElementById("galleryImageCounter").textContent = `${index + 1} / ${photos.length}`;

    // Update thumbnails
    const thumbnails = document.querySelectorAll(".gallery-thumbnail");
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle("active", i === index);
        if (i === index) {
            thumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
    });
}

// ==========================================
// GALLERY NAVIGATION
// ==========================================

document.getElementById("galleryPrev")?.addEventListener("click", function (e) {
    e.stopPropagation();
    if (currentAlbum) {
        const photos = currentAlbum.photos || [currentAlbum.cover];
        currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
        updateGalleryImage(currentPhotoIndex);
    }
});

document.getElementById("galleryNext")?.addEventListener("click", function (e) {
    e.stopPropagation();
    if (currentAlbum) {
        const photos = currentAlbum.photos || [currentAlbum.cover];
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        updateGalleryImage(currentPhotoIndex);
    }
});

// ==========================================
// KEYBOARD NAVIGATION
// ==========================================

document.addEventListener("keydown", function (e) {
    const modal = document.getElementById("galleryModal");
    if (!modal || !modal.classList.contains("active")) return;

    if (e.key === "ArrowLeft") {
        document.getElementById("galleryPrev")?.click();
    } else if (e.key === "ArrowRight") {
        document.getElementById("galleryNext")?.click();
    } else if (e.key === "Escape") {
        closeGalleryModal();
    }
});

// ==========================================
// TOUCH SWIPE SUPPORT
// ==========================================

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", function (e) {
    const modal = document.getElementById("galleryModal");
    if (!modal || !modal.classList.contains("active")) return;
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener("touchend", function (e) {
    const modal = document.getElementById("galleryModal");
    if (!modal || !modal.classList.contains("active")) return;
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            document.getElementById("galleryNext")?.click();
        } else {
            document.getElementById("galleryPrev")?.click();
        }
    }
}, { passive: true });

// ==========================================
// CLOSE GALLERY MODAL
// ==========================================

function closeGalleryModal() {
    const modal = document.getElementById("galleryModal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
        currentAlbum = null;
    }
}

// ==========================================
// FILTER BUTTONS
// ==========================================

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

    // Modal close
    const closeBtn = document.getElementById("galleryModalClose");
    const overlay = document.querySelector(".gallery-modal-overlay");

    if (closeBtn) closeBtn.addEventListener("click", closeGalleryModal);
    if (overlay) overlay.addEventListener("click", closeGalleryModal);

    // Initial render
    renderGallery(galleryFilter);
});

// ==========================================
// EVENTS - STATIC DATA (Simple: Upcoming & Finished)
// ==========================================

const staticEvents = [
    {
        id: 1,
        title: "Automate Anything - Intro to AI Agents ",
        category: "Workshop",
        status: "past",
        date: "December 20, 2025",
        time: "10:00 PM - 11:25 PM",
        venue: "Google Meet",
        venue_type: "online",
        slots: "",
        description: "​Join Lamatic.ai and GDGoC-CTU for a beginner-friendly deep dive: Intro to AI Agents. Whether you're a student, a product builder, or just curious about agents, this session will prove you don't need complex code to build powerful tools.",
        registration_link: "https://luma.com/2rrvseo1?utm_id=97758_v0_s00_e0_tv4_a1den5exk3f8ja",
        image: "includes/images/event 1.jpg",
        hosts: [
            {
                name: "Vrijraj Singh",
                role: "Head of DevRel, Lamatic.ai",
                image: "includes/images/host prof/Vrijraj Singh.avif",
                portfolio: "https://luma.com/user/vjslamatic"
            },
            {
                name: "Tyrone Tabornal",
                role: "Host",
                image: "includes/images/host prof/tyrone.avif",
                portfolio: "https://luma.com/user/usr-quvPKTmaKVeQJfN"
            },
            {
                name: "Aman Sharma",
                role: "Host",
                image: "includes/images/host prof/Aman.avif",
                portfolio: "https://luma.com/user/amanintech"
            },
            {
                name: "Charles Whiteman",
                role: "Host",
                image: "includes/images/host prof/charles.avif",
                portfolio: "https://luma.com/user/amanintech"
            },

        ]
    },
    {
        id: 2,
        title: "Info Session: Stardust and Strides",
        category: "Workshop",
        status: "past",
        date: "September 20, 2025",
        time: "7:00 PM - 9:30 PM",
        venue: "Teams",
        venue_type: "online",
        slots: "",
        description: "Join us for Stardust & Strides, the official kickoff event for our new term! This isn't just another info session; it's a launchpad for your future. We're here to give you a clear roadmap for success, both in your academic journey and in your professional life.",
        registration_link: "https://gdg.community.dev/events/details/google-gdg-on-campus-cebu-technological-university-cebu-philippines-presents-info-session-stardust-and-strides/",
        image: "includes/images/host prof/event 2.jpg",
        hosts: [
            {
                name: "Karl Michael Dela Cruz",
                role: "UX Designer",
                image: "includes/images/host prof/karl.jfif",
                portfolio: "https://www.linkedin.com/in/karldelacruz/"
            },
            {
                name: "Aldrich Tan",
                role: "CXO & Co-Founder",
                image: "includes/images/host prof/tan.png",
                portfolio: "https://www.linkedin.com/in/aldricht/"
            },
            {
                name: "Shannen Yu Sapar",
                role: "Product Design & Strategy",
                image: "includes/images/host prof/sapar.jfif",
                portfolio: "https://www.linkedin.com/in/aldricht/"
            }
        ]
    },
    {
        id: 3,
        title: "C Workshop for Newbies",
        category: "Workshop",
        status: "past",
        date: "December 7, 2024",
        time: "1:00 PM",
        venue: "Teams",
        venue_type: "online",
        online_link: "",
        slots: "",
        description: "",
        registration_link: "#",
        image: "includes/images/event 3.jfif",
        hosts: [
            {
                name: "",
                role: "",
                image: "",
                portfolio: ""
            }
        ]
    },
    {
        id: 4,
        title: "Game Jam",
        category: "Workshop",
        status: "past",
        date: "October 27, 2025",
        time: "01:00 AM",
        venue: "",
        venue_type: "online",
        slots: "",
        description: "A Game Jam is a short event where you or your team work together to create a small game centered around a theme. Game Jams are incredibly helpful for developing new skills, refining your ability to estimate workload, and, most importantly, building relationships with other people who are passionate about making games.",
        registration_link: "https://itch.io/jam/google-dev-group-jam-1",
        image: "includes/images/EVENT2.jpg",
        hosts: [
            {
                name: "Meansofa",
                role: "Host",
                image: "includes/images/host prof/MEANSOFA.jpg",
                portfolio: "https://itch.io/profile/memosa"
            },
            {
                name: "Hueyitch",
                role: "Host",
                image: "",
                portfolio: "https://huey12345.itch.io/"
            },
            {
                name: "Nesqyk",
                role: "Host",
                image: "",
                portfolio: "https://nesqyk.itch.io/"
            }
        ]
    },
    {
        id: 4,
        title: "Gemini Study Jam: Gemini Fundamentals.",
        category: "Workshop",
        status: "past",
        date: " October 18, 2025",
        time: "7:00 PM - 9:00 PM",
        venue: "Bevvy Virtual",
        venue_type: "online",
        slots: "",
        description: "AWe're kicking off our very first Study Jam! Join Tyrone Tabornal, our Campus Organizer, for Gemini Study Jam: Gemini Fundamentals.",
        registration_link: "l.facebook.com/l.php?u=https%3A%2F%2Fgdg.community.dev%2Fe%2Fmb5bts%2F%3Ffbclid%3DIwcGRvZgVleHRuA2FlbQIxMABicmlkETFvbUNKRW5UdW5GQUFaTUhPc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHr1lZLcAkhBEsQNw7sGDsp1WkoPcpCh6Wtz0VvKBP9aelDYorAqiGxH3sGb-_aem_282a7wAVF3iFCoXBm770qA&h=AUB4I4aAV0aoYP_ATgMxyU1yUTJjiqXP1CVs6UVaOJr2a6RiZuWI8gAjP49Bw9YRnlwtmrorXtgcgeX-WZOwJk-GsXP8UjKl_rg1BPq2yxFzvXJn4ijK8h3aTnEm5ZgLs5VCqqEX3rDidJnksQ&__tn__=-UK*F&c[0]=AUC5fG0Fw370B4oJLhKU-gsYxfvPkdwlJb7hw4DzH_a-jVaWUTtqGRkp_7-pvBWkIiQ6FK_3zO0oj2rBJaSqbbkjsntnO9jLOpIOt1Qc8P5IzeFPi7gIkLmPU--Rt8Y_3etyBcnPctb1ZyIy3kUwFDjQQ-WAQFTNWxmO11H2yaA",
        image: "includes/images/event4.jpg",
        hosts: [
            {
                name: "Tyrone Tabornal",
                role: "Speaker",
                image: "includes/images/host prof/tyrone.avif",
                portfolio: "https://luma.com/user/usr-quvPKTmaKVeQJfN"
            }
        ]
    }
];

let currentEventFilter = "all";

// ==========================================
// RENDER EVENTS - WITH CLICK HANDLERS
// ==========================================

function renderEvents(filter = "all") {
    const grid = document.getElementById("eventsGrid");
    if (!grid) return;

    let filtered = staticEvents;
    if (filter !== "all") {
        filtered = staticEvents.filter((item) => item.status === filter);
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="gallery-empty" style="grid-column:1/-1;">
                <i class="fas fa-calendar-alt"></i>
                <h3>No Events Found</h3>
                <p>No events available for this category.</p>
            </div>
        `;
        return;
    }

    const statusColors = { upcoming: "#4285F4", past: "#888" };
    const statusLabels = { upcoming: "Upcoming", past: "Finished" };
    const venueIcons = { online: "fa-wifi", offline: "fa-map-marker-alt", hybrid: "fa-globe" };
    const venueLabels = { online: "Online", offline: "In-Person", hybrid: "Hybrid" };

    let html = "";
    filtered.forEach((item, index) => {
        const venueType = item.venue_type || "offline";
        const venueIcon = venueIcons[venueType] || "fa-map-marker-alt";
        const venueLabel = venueLabels[venueType] || "In-Person";

        let hostsHtml = "";
        if (item.hosts && item.hosts.length > 0) {
            hostsHtml = item.hosts.map(host => `
                <div class="event-host-avatar" title="${host.name} - ${host.role}" style="display:inline-block;margin-right:-8px;">
                    <img src="${host.image || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(host.name) + '&background=4285F4&color=fff&size=30&bold=true'}" 
                         alt="${host.name}" 
                         style="width:32px;height:32px;border-radius:50%;border:2px solid #fff;object-fit:cover;"
                         onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(host.name)}&background=4285F4&color=fff&size=30&bold=true'">
                </div>
            `).join('');
        }

        html += `
            <div class="event-card" data-status="${item.status}" data-index="${index}">
                <div class="event-card-inner">
                    <div class="event-banner">
                        <img src="${item.image}" alt="${item.title}" onerror="this.src='https://picsum.photos/600/400?random=${item.id + 10}'">
                        <span class="event-badge ${item.status}" style="background:${statusColors[item.status] || '#4285F4'}">
                            <i class="fas ${item.status === 'upcoming' ? 'fa-calendar-alt' : 'fa-check-circle'}"></i> 
                            ${statusLabels[item.status] || 'Upcoming'}
                        </span>
                        <span class="event-venue-badge" style="position:absolute;bottom:14px;right:14px;padding:4px 12px;border-radius:50px;background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);color:#fff;font-size:10px;font-weight:500;display:flex;align-items:center;gap:6px;z-index:2;">
                            <i class="fas ${venueIcon}"></i> ${venueLabel}
                        </span>
                        <div class="event-hover-info">
                            <div class="event-hover-content">
                                <span class="event-category">
                                    <i class="fas ${item.category === 'Workshop' ? 'fa-code' : item.category === 'Hackathon' ? 'fa-laptop-code' : item.category === 'Tech Talk' ? 'fa-cloud' : 'fa-users'}"></i> 
                                    ${item.category || 'Event'}
                                </span>
                                <h3>${item.title}</h3>
                                <p>${item.description ? item.description.substring(0, 80) + (item.description.length > 80 ? "..." : "") : ""}</p>
                                ${hostsHtml ? `<div class="event-hosts" style="display:flex;align-items:center;gap:4px;margin-bottom:8px;flex-wrap:wrap;"><span style="color:rgba(255,255,255,0.4);font-size:10px;margin-right:4px;">Hosts:</span> ${hostsHtml}</div>` : ''}
                                <div class="event-meta">
                                    <span><i class="fas fa-calendar-alt"></i> ${item.date || ''}</span>
                                    <span><i class="fas fa-clock"></i> ${item.time || ''}</span>
                                    <span><i class="fas ${venueIcon}"></i> ${item.venue || item.online_link || 'TBA'}</span>
                                    <span><i class="fas fa-users"></i> ${item.slots || 'Unlimited'}</span>
                                </div>
                                <div style="display:flex;gap:10px;flex-wrap:wrap;">
                                    ${item.registration_link && item.status !== 'past' ? `<a href="${item.registration_link}" target="_blank" class="event-btn" style="text-decoration:none;">
                                        Register Now 
                                        <i class="fas fa-arrow-right"></i>
                                    </a>` : ''}
                                    ${item.status === 'past' ? `<a href="#" class="event-btn" style="text-decoration:none;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);">
                                        <i class="fas fa-eye"></i> View Recap
                                    </a>` : ''}
                                    ${item.online_link && item.venue_type !== 'offline' ? `<a href="${item.online_link}" target="_blank" class="event-btn" style="background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);text-decoration:none;">
                                        <i class="fas fa-video"></i> Join Online
                                    </a>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;

    // ===== IMPORTANT: Add click event to open modal =====
    document.querySelectorAll(".event-card").forEach((card) => {
        card.addEventListener("click", function (e) {
            // Prevent if clicking on a link or button inside
            if (e.target.closest("a") || e.target.closest(".event-btn")) {
                return;
            }
            const index = parseInt(this.dataset.index);
            if (!isNaN(index)) {
                openEventModal(index);
            }
        });
    });
}

// ==========================================
// OPEN EVENT MODAL
// ==========================================

function openEventModal(index) {
    const data = staticEvents[index];
    if (!data) {
        console.error("Event not found at index:", index);
        return;
    }

    const modal = document.getElementById("eventModal");
    if (!modal) {
        console.error("Modal not found!");
        return;
    }

    // Set main image
    const modalImage = document.getElementById("eventModalImage");
    if (modalImage) {
        modalImage.src = data.image || "https://picsum.photos/600/400?random=50";
        modalImage.alt = data.title;
    }

    // Set status badge
    const badge = document.getElementById("eventModalBadge");
    const statusColors = { upcoming: "#4285F4", past: "#888" };
    const statusLabels = { upcoming: "Upcoming", past: "Finished" };
    if (badge) {
        badge.textContent = statusLabels[data.status] || "Upcoming";
        badge.style.background = statusColors[data.status] || "#4285F4";
    }

    // Set venue type badge
    const venueType = data.venue_type || "offline";
    const venueIcons = { online: "fa-wifi", offline: "fa-map-marker-alt", hybrid: "fa-globe" };
    const venueLabels = { online: "Online", offline: "In-Person", hybrid: "Hybrid" };

    const venueIconEl = document.getElementById("eventModalVenueIcon");
    const venueTypeEl = document.getElementById("eventModalVenueType");
    const venueBadgeEl = document.getElementById("eventModalVenueBadge");

    if (venueIconEl) venueIconEl.className = "fas " + (venueIcons[venueType] || "fa-map-marker-alt");
    if (venueTypeEl) venueTypeEl.textContent = venueLabels[venueType] || "In-Person";
    if (venueBadgeEl) venueBadgeEl.style.display = "flex";

    // Set category
    const categoryEl = document.getElementById("eventModalCategory");
    if (categoryEl) categoryEl.textContent = data.category || "Event";

    // Set title
    const titleEl = document.getElementById("eventModalTitle");
    if (titleEl) titleEl.textContent = data.title;

    // Set description
    const descEl = document.getElementById("eventModalDescription");
    if (descEl) descEl.textContent = data.description || "No description available.";

    // Set date
    const dateEl = document.getElementById("eventModalDate");
    if (dateEl) dateEl.textContent = data.date || "TBA";

    // Set time
    const timeEl = document.getElementById("eventModalTime");
    if (timeEl) timeEl.textContent = data.time || "TBA";

    // Set venue
    let venueDisplay = data.venue || "TBA";
    if (venueType === "online" && data.online_link) {
        venueDisplay = "Online Event";
    } else if (venueType === "hybrid") {
        venueDisplay = data.venue ? data.venue + " + Online" : "Hybrid Event";
    }
    const venueEl = document.getElementById("eventModalVenue");
    if (venueEl) venueEl.textContent = venueDisplay;

    // Set slots
    const slotsEl = document.getElementById("eventModalSlots");
    if (slotsEl) slotsEl.textContent = data.slots || "Unlimited";

    // Online Link
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

    // Registration Link
    const regBox = document.getElementById("eventModalRegBox");
    const regLink = document.getElementById("eventModalRegLink");
    const registerBtn = document.getElementById("eventRegisterBtn");
    if (regBox && regLink && registerBtn) {
        if (data.registration_link && data.status !== 'past') {
            regBox.style.display = "block";
            regLink.innerHTML = `<a href="${data.registration_link}" target="_blank" style="color:#4285F4;text-decoration:none;">Register Here</a>`;
            registerBtn.href = data.registration_link;
            registerBtn.style.display = "flex";
        } else {
            regBox.style.display = "none";
            registerBtn.style.display = "none";
        }
    }

    // ===== HOSTS / SPEAKERS =====
    const hostsContainer = document.getElementById("eventHostsContainer");
    const hostsSection = document.getElementById("eventHostsSection");
    const speakerSingle = document.getElementById("eventSpeakerSingle");

    const hosts = data.hosts || [];

    if (hostsContainer && hostsSection && speakerSingle) {
        if (hosts.length > 0) {
            hostsSection.style.display = "block";
            speakerSingle.style.display = "none";

            let hostsHtml = "";
            hosts.forEach((host) => {
                const imgSrc = host.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(host.name)}&background=4285F4&color=fff&size=200&bold=true`;
                hostsHtml += `
                    <div class="event-host-item">
                        <img src="${imgSrc}" alt="${host.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(host.name)}&background=4285F4&color=fff&size=200&bold=true'">
                        <div class="host-info">
                            <h5>${host.name}</h5>
                            <p>${host.role || 'Speaker'}</p>
                        </div>
                        <a href="${host.portfolio || '#'}" target="_blank" class="host-link">
                            <i class="fas fa-external-link-alt"></i> Portfolio
                        </a>
                    </div>
                `;
            });
            hostsContainer.innerHTML = hostsHtml;
        } else if (data.speaker) {
            hostsSection.style.display = "none";
            speakerSingle.style.display = "flex";
            const speakerImg = document.getElementById("eventSpeakerImage");
            const speakerName = document.getElementById("eventSpeakerName");
            const speakerRole = document.getElementById("eventSpeakerRole");
            if (speakerImg) speakerImg.src = data.speakerImg || `https://ui-avatars.com/api/?name=${encodeURIComponent(data.speaker)}&background=4285F4&color=fff&size=200&bold=true`;
            if (speakerName) speakerName.textContent = data.speaker;
            if (speakerRole) speakerRole.textContent = data.speakerRole || "Guest Speaker";
        } else {
            hostsSection.style.display = "none";
            speakerSingle.style.display = "none";
        }
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// ==========================================
// CLOSE EVENT MODAL
// ==========================================

function closeEventModal() {
    const modal = document.getElementById("eventModal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
}

// ==========================================
// EVENT FILTERS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    const filterBtns = document.querySelectorAll(".events-filter-btn");
    
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            filterBtns.forEach((b) => b.classList.remove("active"));
            this.classList.add("active");
            currentEventFilter = this.dataset.filter;
            renderEvents(currentEventFilter);
        });
    });

    // Initial render
    renderEvents("all");

    // Modal close events
    const closeBtn = document.getElementById("eventModalClose");
    const modal = document.getElementById("eventModal");
    const overlay = document.querySelector(".event-modal-overlay");

    if (closeBtn) {
        closeBtn.addEventListener("click", closeEventModal);
    }
    if (overlay) {
        overlay.addEventListener("click", closeEventModal);
    }

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal?.classList.contains("active")) {
            closeEventModal();
        }
    });

    // Share button
    const shareBtn = document.getElementById("eventShareBtn");
    if (shareBtn) {
        shareBtn.addEventListener("click", function () {
            const title = document.getElementById("eventModalTitle")?.textContent || "GDG CTU Event";
            if (navigator.share) {
                navigator.share({
                    title: title,
                    text: "Check out this GDG CTU event!",
                    url: window.location.href
                }).catch(() => {});
            } else {
                navigator.clipboard?.writeText(window.location.href).then(() => {
                    showNotification("✅ Link copied to clipboard!", "success");
                }).catch(() => {
                    alert("Share this event: " + window.location.href);
                });
            }
        });
    }
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

const merchItems = [
    {
        id: 1,
        name: " Pink Lanyard",
        description: "Pink Lanyard Design",
        price: "₱100",
        badge: "Limited",
        image: "includes/images/merch/l2.jpg",
        orderLink: "https://docs.google.com/forms/d/e/1FAIpQLSfqXJ7jS2KCqo2-kS_Tm99uqtBYUBwIVgHFnOGs6fjXN8bB-Q/formResponse"
    },
    {
        id: 2,
        name: "Blue Lanyard",
        description: "Blue Lanyard Design",
        price: "₱100",
        badge: "Limited",
        image: "includes/images/merch/l1.jpg",
        orderLink: "https://docs.google.com/forms/d/e/1FAIpQLSfqXJ7jS2KCqo2-kS_Tm99uqtBYUBwIVgHFnOGs6fjXN8bB-Q/formResponse"
    },
    {
        id: 3,
        name: "GDG Sticker Pack",
        description: "Collectible stickers for your laptop.",
        price: "₱100",
        badge: "Limited",
        image: "includes/images/merch/l3.jpg",
        orderLink: "https://docs.google.com/forms/d/e/1FAIpQLSfqXJ7jS2KCqo2-kS_Tm99uqtBYUBwIVgHFnOGs6fjXN8bB-Q/formResponse"
    }
];

// ==========================================
// RENDER MERCH ITEMS
// ==========================================

function renderMerch() {
    const grid = document.getElementById("merchGrid");
    if (!grid) return;

    if (merchItems.length === 0) {
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
    merchItems.forEach((item) => {
        html += `
            <div class="merch-card">
                <div class="merch-photo">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://picsum.photos/400/400?random=${item.id + 20}'">
                    <span class="merch-badge">${item.badge}</span>
                </div>
                <div class="merch-hover-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="merch-price-row">
                        <span class="merch-price">${item.price}</span>
                       
                    </div>
                    <a href="${item.orderLink}" target="_blank" class="order-btn">
                        <i class="fas fa-shopping-bag"></i> Buy Now
                    </a>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

// ==========================================
// INITIALIZE MERCH
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    renderMerch();
});

// ==========================================
// PARTNERS - STATIC DATA
// ==========================================

const staticPartners = [
  {
    name: "UX Mini Cebu",
    role: "Organization Partner",
    image: "includes/images/partnership/p1.jpg"
  },
 //{
 //   name: "Microsoft",
 //   role: "Technology Partner",
 //   image: "https://ui-avatars.com/api/?name=Microsoft&background=EA4335&color=fff&size=200&bold=true"
  //}
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
