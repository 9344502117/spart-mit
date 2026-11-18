/* Edit this file to manage all SPART website content. Image paths are relative to this folder. */
window.SPART_DATA = {
  staff: [
    { name: "Dr. K. Elangovan", designation: "President, SPART MIT · Associate Professor", photo: "assets/people/staff/elangovan.png" }
  ],
 students: [
    { name: "Nikileshwar J", position: "Chairman", rollNo: "2023508004", photo: "assets/people/students/ob1.jpeg", group: "Office Bearer" },
    { name: "Faizaa Fathima M", position: "Vice-Chairman", rollNo: "2023508020", photo: "assets/people/students/ob2.JPG", group: "Office Bearer" },
    { name: "Lashvanth R", position: "Treasurer", rollNo: "2023508056", photo: "assets/people/students/ob3.JPG", group: "Office Bearer" },
    { name: "Akshaya P", position: "Treasurer", rollNo: "2023508029", photo: "assets/people/students/ob4.jpeg", group: "Office Bearer" },
    { name: "Elumalai K", position: "Technical Head", rollNo: "2023508058", photo: "assets/people/students/ob5.png", group: "Office Bearer" },
    { name: "Nivetha SR", position: "Technical Head", rollNo: "2023508016", photo: "assets/people/students/ob6.JPG", group: "Office Bearer" },
    { name: "Pirithivi Rajan E", position: "Event Coordinator", rollNo: "2023508035", photo: "assets/people/students/ob7.JPG", group: "Office Bearer" },
    { name: "Raghumasri K", position: "Event Coordinator", rollNo: "2023508003", photo: "assets/people/students/ob8.jpeg", group: "Office Bearer" },
    { name: "Maheswaran V", position: "SPART Representative", rollNo: "2023508011", photo: "assets/people/students/ob9.jpeg", group: "Office Bearer" },
    { name: "Nareshkumar S", position: "Program Secretary", rollNo: "2023508302", photo: "assets/people/students/ob10.jpeg", group: "Office Bearer" },
    { name: "Srimathi", position: "Program Secretary", rollNo: "2023508036", photo: "assets/people/students/ob11.jpeg", group: "Office Bearer" },
    { name: "Sovin Varghese", position: "Brand Ambassador", rollNo: "2023508022", photo: "assets/people/students/ob12.JPG", group: "Office Bearer" },
    { name: "Madhumidha R", position: "Brand Ambassador", rollNo: "2023508008", photo: "assets/people/students/ob13.JPG", group: "Office Bearer" },
    { name: "Antony P", position: "Alumni Coordinator", rollNo: "2023508006", photo: "assets/people/students/ob14.png", group: "Office Bearer" },
    { name: "Lavanya", position: "Alumni Coordinator", rollNo: "2023508044", photo: "assets/people/students/ob15.jpeg", group: "Office Bearer" },
    { name: "Jeeva Amuthan M", position: "Alumni Coordinator", rollNo: "2023508051", photo: "assets/people/students/ob16.JPG", group: "Office Bearer" },
    { name: "Kalaiyarasi J", position: "Alumni Coordinator", rollNo: "2023508005", photo: "assets/people/students/ob17.jpeg", group: "Office Bearer" },
    { name: "Karthika J", position: "IRI Coordinator", rollNo: "2023508019", photo: "assets/people/students/ob18.png", group: "Office Bearer" },
    { name: "Bhavani S", position: "IPI Coordinator", rollNo: "2023508041", photo: "assets/people/students/ob19.png", group: "Office Bearer" },
    { name: "Saravanan E", position: "Placement Coordinator", rollNo: "2023508045", photo: "assets/people/students/ob20.jpeg", group: "Office Bearer" },
    { name: "Dharshini V", position: "Placement Coordinator", rollNo: "2023508034", photo: "assets/people/students/ob21.jpeg", group: "Office Bearer" }
  ],

  // HOMEPAGE FEATURED EVENT: edit all hero image, button and registration settings here.
  heroEvent: {
    eventId: "renewa",
    title: "RENEWA ’26", // Edit homepage hero title here
    description: "A One-Day National Level Workshop on 'Shaping the Future of Polymer Industries with Industry 5.0/4.0' — 23rd December 2026 at Rajam Hall, MIT Campus.", // Edit homepage hero description here
    displayMode: "details", // Use "showcase" after the event ends to show only the group/showcase image.
    heroImage: "assets/events/renewa26.png", // Homepage hero poster while displayMode is "details". Add your image path here.
    imageOnlyImage: "", // Separate group/showcase image for the completed-event hero.
    showDescription: true,
    showRegistrationButton: true,
    registrationLabel: "Register Now",
    registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc5jys2xYYHU6FF443SaCn_gdJ5yZ7R_UaofeHUeBD5I1vXnw/viewform", // Paste the Google Form link between the quotes.
    showViewMoreButton: true,
    viewMoreLabel: "Explore Event",
    viewMoreUrl: "" // Leave blank to automatically link to Events & Activities and this event.
  },

  // Add new events here. No separate event HTML file is needed.
  // cardImage = Events & Activities card; detailImage = expanded text section image.
  events: [
    {
      id: "renewa",
      title: "RENEWA ’26",
      status: "upcoming",
      shortDescription: "A One-Day National Level Workshop on 'Shaping the Future of Polymer Industries with Industry 5.0/4.0' — 23rd December 2026 at Rajam Hall, MIT Campus.",
      description: "The Department of Rubber and Plastics Technology (RPT) and the Society of Plastics and Rubber Technologists (SPART) at Madras Institute of Technology Campus, Anna University, proudly present RENEWA ’26 — a One-Day National Level Workshop on 'Shaping the Future of Polymer Industries with Industry 5.0/4.0'. Scheduled for Wednesday, 23rd December 2026, starting at 9:00 AM at Rajam Hall, MIT Campus, the workshop will bring together industry experts and students to explore smart manufacturing, automation, and human-centric innovation in the polymer sector. Certificates, noon lunch, and refreshments will be provided to all participants. Speaker and sponsor details will be announced soon!",
      cardImage: "assets/events/renewa26.png",
      detailImage: ""
    },
    /*
    {
      id: "elastoplaz",
      title: "ELASTOPLAZ",
      status: "upcoming",
      shortDescription: "Event information will be added when confirmed.",
      description: "Event information will be added when confirmed.",
      cardImage: "",
      detailImage: ""
    },
    */
  {
      id: "inauguration",
      title: "SPART ’26 | A New Chapter Begins!",
      status: "completed",
      shortDescription: "A memorable day of celebration, connection, and new possibilities!",
      description: "August 14, 2026 marked the beginning of a new chapter for SPART ’26, filled with enthusiasm, inspiration, and new beginnings. The occasion was graced by Prof. Dr. S. Sathikh, Chief Guest, and Dr. K. Elamvazhuthi, Guest of Honour. The event also witnessed the introduction of the new SPART office bearers, along with the Prize Distribution & Felicitation Ceremony, celebrating the achievements of our students. A memorable day of celebration, connection, and new possibilities!",
      cardImage: "assets/events/inauguration.jpg",
      
    },
    {
      id: "elastoplaz-26",
      title: "ELASTOPLAZ ’26 | National Level Technical Symposium & Workshop",
      status: "completed",
      shortDescription: "National Level Technical Symposium & Workshop held on 21st February 2026 at Rajam Hall, MIT Campus.",
      description: "The Department of Rubber and Plastics Technology, Madras Institute of Technology Campus, Anna University Chennai, proudly announces the successful completion of ELASTOPLAZ’26, a National Level Technical Symposium, held on 21st February 2026 at Rajam Hall, MIT Campus. A highlight of ELASTOPLAZ’26 was the technical lecture and workshop on 'Polymers Driving the Future of Electric Mobility', delivered by Mr. CR Suresh, General Manager & Head, Manufacturing Quality, Ashok Leyland. We were also privileged to have Mr. Fumiharu Kurose, Chief Technical Officer, Kobelco India Pvt. Ltd., as the Chief Guest. We sincerely acknowledge the generous support of our Title Sponsor – Kobelco India, and Co-Sponsors: CORI ENGINEERS PVT. LTD., KROMATIKS, IRMRI-South Centre, PRS Tyres, and Tritech Elastomers.",
      cardImage: "assets/gallery/ELASTOPLAZ26/EP1.jpg",
    
    }
  ],

  gallery: [
    { title: "INAUGURATION ’26", images: [
      "assets/gallery/in1.jpg",
      "assets/gallery/in2.jpg",
      "assets/gallery/in3.jpg",
      "assets/gallery/in4.jpg",
      "assets/gallery/in5.jpg",
      "assets/gallery/in6.jpg",
      "assets/gallery/in7.jpg",
      "assets/gallery/in8.jpg",
      "assets/gallery/in9.jpg",
      "assets/gallery/in10.jpg",
      "assets/gallery/in11.jpg",
      "assets/gallery/in12.jpg"
    ]},
    { title: "TECHNICAL SESSIONS", images: [
      "assets/gallery/TECHNICAL SESSIONS/ts1.png",
      "assets/gallery/TECHNICAL SESSIONS/ts2.png",
      "assets/gallery/TECHNICAL SESSIONS/ts3.png",
      "assets/gallery/TECHNICAL SESSIONS/ts4.png",
      "assets/gallery/TECHNICAL SESSIONS/ts5.png",
      "assets/gallery/TECHNICAL SESSIONS/ts6.png",
      "assets/gallery/TECHNICAL SESSIONS/ts7.png",
      "assets/gallery/TECHNICAL SESSIONS/ts8.png"
    ]},
    { title: "ELASTOPLAZ ’26", images: [
      "assets/gallery/ELASTOPLAZ26/EP1.jpg",
      "assets/gallery/ELASTOPLAZ26/EP2.jpg",
      "assets/gallery/ELASTOPLAZ26/EP3.jpg",
      "assets/gallery/ELASTOPLAZ26/EP4.jpg",
      "assets/gallery/ELASTOPLAZ26/EP5.jpg",
      "assets/gallery/ELASTOPLAZ26/EP6.jpg",
      "assets/gallery/ELASTOPLAZ26/EP7.jpg",
      "assets/gallery/ELASTOPLAZ26/EP8.jpg",
      "assets/gallery/ELASTOPLAZ26/EP9.jpg"
    ]},
  ],
 sponsors: [
    { name: "Kobelco India", logo: "assets/sponsors/1kobelco.jpg", url: "https://www.kobelco-in.com/" },
    { name: "bridge stone", logo: "assets/sponsors/17.png", url: "https://www.bridgestone.co.in/" },
    { name: "Reliance Polymers", logo: "assets/sponsors/4reliance.jpg", url: "https://www.reliancepolymers.in/" },
    { name: "CORI Engineers Pvt. Ltd.", logo: "assets/sponsors/2cori.png", url: "" },
    { name: "IRMRI – South Centre", logo: "assets/sponsors/3irmri.png", url: "https://irmri.org/irmri-south-centre.html" },
    { name: "PRS Tyres Pvt. Ltd.", logo: "assets/sponsors/5prs-tyres-pvt-ltd.jpg", url: "https://www.prstyre.com/" },
    { name: "FCS – Fluorocarbon Seals", logo: "assets/sponsors/6fcs.jpg", url: "https://www.fluorocarbonseals.com/" },
    { name: "Vikas Elastochem Agencies Pvt. Ltd.", logo: "assets/sponsors/7logo.png", url: "https://vikaselastochem.com/" },
    { name: "Tritech Elastomers", logo: "assets/sponsors/9trictech.png", url: "https://tritechelastomers.in/" },
    { name: "All India Rubber Industries Association (AIRIA)", logo: "assets/sponsors/9airia.jpg", url: "https://www.allindiarubber.net/" },
    { name: "Indian Plastics Institute (IPI)", logo: "assets/sponsors/10IPI.jpg", url: "https://www.ipiindia.org/home" },
    { name: "Indian Rubber Institute (IRI)", logo: "assets/sponsors/11IRI.png", url: "https://indianrubberinstitute.com/" },
    { name: "J.K. Fenner", logo: "assets/sponsors/12jk.png", url: "https://jkfenner.com/" },
    { name: "Leister Technologies", logo: "assets/sponsors/13Leister.jpg", url: "" },
    { name: "Life Insurance Corporation of India (LIC)", logo: "assets/sponsors/14lic.jpg", url: "" },
    { name: "HL Mando Automotive India Pvt. Ltd.", logo: "assets/sponsors/15mando.png", url: "" },
    { name: "Parker", logo: "assets/sponsors/16Parker.png", url: "" },
    { name: "PlastIndia Foundation", logo: "assets/sponsors/17PlastIndia.jpg", url: "" },
    
  ]
};
