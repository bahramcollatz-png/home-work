feather.replace();
VANTA.GLOBE({
  el: "#vanta-globe",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x4f46e5,
  backgroundColor: 0x111827,
  size: 0.8,
});

// Smooth hover effects
document.querySelectorAll(".hover-grow").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.05)";
  });
  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1)";
  });
});
// Initialize feather icons
feather.replace();

// Enhanced smooth scrolling with offset
// Smooth scroll with animation for contact section
document.querySelectorAll('a[href="#contact"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - 80;
      anime({
        targets: document.documentElement,
        scrollTop: targetPosition,
        duration: 800,
        easing: "easeInOutQuad",
      });
      history.pushState(null, null, "#contact");
    }
  });
});

// Smooth scroll for other sections
document
  .querySelectorAll('a[href^="#"]:not([href="#contact"])')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const offset = 80; // Adjust this value to offset the scroll position

      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          offset;
        anime({
          targets: document.documentElement,
          scrollTop: targetPosition,
          duration: 600,
          easing: "easeInOutQuad",
        });
        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, targetId);
        } else {
          location.hash = targetId;
        }
      }
    });
  });
const translations = {
  en: {
    title: "Hasibullah Hamidi | Full Stack Developer & Educator",
    lang_name: "English",
    role_dev: "Full Stack Developer",
    role_educator: "ICT Educator",
    role_ai: "AI Enthusiast",
    hero_paragraph:
      "I transform complex problems into elegant software solutions and empower the next generation of developers with practical, industry-relevant skills.",
    my_courses_btn: "My Courses",
    ai_tools_btn: "AI Tools",
    contact_me_btn: "Contact Me",
    courses_heading: "My Courses",
    courses_sub:
      "Invest in your future. Choose a plan that aligns with your career goals.",
    course1_title: "Artificial Intelligence (AI) for Everyone",
    course1_desc:
      "Beginner-friendly course to understand AI, its impact on society, and practical usage of AI tools in daily life — no coding required.",
    course2_title: "Python Development",
    course2_desc:
      "From basic scripts to complex applications, master the world's most popular programming language.",
    course3_title: "Front-end Web Development",
    course3_desc:
      "Build beautiful, responsive, and interactive user interfaces with modern web technologies.",
    view_plans: "View Plans",
    ai_heading: "Recommended AI Tools",
    ai_sub:
      "A curated list of powerful AI websites and tools that I use and recommend.",
    search_ph: "Search by name or tag (e.g., Writing, Video)...",
    tool1_title: "Google Gemini",
    tool1_desc:
      "Google's powerful multimodal AI for advanced reasoning, conversation, and code generation.",
    tool2_title: "ChatGPT",
    tool2_desc:
      "The original AI chat assistant for generating human-like text and assisting with a wide range of tasks.",
    tool3_title: "Midjourney",
    tool3_desc:
      "A premier AI image generator that creates stunning visuals from simple text prompts.",
    visit_site: "Visit Site",
    contact_heading: "Let's Connect",
    contact_sub:
      "Got a project or want to collaborate? Drop me a message or connect on socials.",
    send_message: "Send a Message",
    label_name: "Name",
    label_email: "Email",
    label_subject: "Subject",
    label_message: "Message",
    send_btn: "Send Message",
    email_heading: "Email Me",
    whatsapp_heading: "Call/WhatsApp",
    github_heading: "GitHub",
    email_address: "hasibullahhamidi@yahoo.com",
    phone_number: "+93 (0) 730 753 056",
    github_text: "github.com/hasibullahh",
    footer_desc:
      "Full Stack Developer & Educator passionate about building digital solutions and sharing knowledge.",
    footer_quick_links: "Quick Links",
    footer_courses_heading: "Courses",
    footer_legal_heading: "Legal",
    footer_copyright: "© 2025 Hasibullah Hamidi. All rights reserved.",
    footer_made: "Designed & Built with ❤️ in Afghanistan",
    link_courses: "Courses",
    link_ai: "AI Tools",
    link_contact: "Contact",
    link_blog: "Blog",
  },
  prs: {
    title: "حسیب الله حمیدی | توسعه‌دهنده فول‌استک و مربی",
    lang_name: "دری",
    role_dev: "توسعه‌دهنده فول‌استک",
    role_educator: "معلم ICT",
    role_ai: "هوش مصنوعی مشتاق",
    hero_paragraph:
      "من مسائل پیچیده را به راه‌حل‌های نرم‌افزاری زیبا تبدیل می‌کنم و نسل بعدی توسعه‌دهندگان را با مهارت‌های عملی مرتبط با صنعت توانمند می‌سازم.",
    my_courses_btn: "دوره‌ها",
    ai_tools_btn: "ابزارهای هوش مصنوعی",
    contact_me_btn: "تماس",
    courses_heading: "دوره‌های من",
    courses_sub:
      "در آینده خود سرمایه‌گذاری کنید. برنامه‌ای را انتخاب کنید که با اهداف شغلی شما همسو باشد.",
    course1_title: "هوش مصنوعی برای همه",
    course1_desc:
      "دوره‌ای مناسب مبتدیان برای درک هوش مصنوعی، تأثیر آن بر جامعه و استفاده عملی از ابزارهای هوش مصنوعی در زندگی روزمره — نیازی به کدنویسی نیست.",
    course2_title: "توسعه پایتون",
    course2_desc:
      "از اسکریپت‌های پایه تا برنامه‌های پیچیده، زبان محبوب جهان را فرابگیرید.",
    course3_title: "توسعه فرانت‌اند",
    course3_desc:
      "ایجاد رابط‌های کاربری زیبا، پاسخگو و تعاملی با تکنولوژی‌های مدرن وب.",
    view_plans: "مشاهده پلان‌ها",
    ai_heading: "ابزارهای پیشنهادی هوش مصنوعی",
    ai_sub:
      "فهرستی از وب‌سایت‌ها و ابزارهای قدرتمند هوش مصنوعی که من استفاده و توصیه می‌کنم.",
    search_ph: "جستجو بر اساس نام یا برچسب (مثلاً نوشتن، ویدیو)...",
    tool1_title: "گوگل جِمِینی",
    tool1_desc:
      "هوش مصنوعی چندرسانه‌ای گوگل برای استدلال پیشرفته، گفتگو و تولید کد.",
    tool2_title: "چت‌جی‌پی‌تی",
    tool2_desc:
      "دستیار چت هوش مصنوعی برای تولید متن شبیه انسان و کمک در طیف گسترده‌ای از وظایف.",
    tool3_title: "میدجورنی",
    tool3_desc:
      "یک مولد تصویر هوش مصنوعی برای خلق تصاویر خیره‌کننده از متن ساده.",
    visit_site: "بازدید سایت",
    contact_heading: "بیایید ارتباط برقرار کنیم",
    contact_sub:
      "یک پروژه دارید یا می‌خواهید همکاری کنید؟ پیغام بفرستید یا در شبکه‌ها ارتباط برقرار کنید.",
    send_message: "ارسال پیام",
    label_name: "نام",
    label_email: "ایمیل",
    label_subject: "موضوع",
    label_message: "پیغام",
    send_btn: "ارسال پیام",
    email_heading: "ایمیل",
    whatsapp_heading: "تماس/واتساپ",
    github_heading: "گیت‌هاب",
    email_address: "hasibullahhamidi@yahoo.com",
    phone_number: "+93 (0) 730 753 056",
    github_text: "github.com/hasibullahh",
    footer_desc:
      "توسعه‌دهنده فول‌استک و مربی که عاشق ساخت راه‌حل‌های دیجیتال و اشتراک‌گذاری دانش است.",
    footer_quick_links: "لینک‌های سریع",
    footer_courses_heading: "دوره‌ها",
    footer_legal_heading: "قانونی",
    footer_copyright: "© 2025 حسیب الله حمیدی. تمامی حقوق محفوظ است.",
    footer_made: "طراحی و ساخته شده با ❤️ در افغانستان",
    link_courses: "دوره‌ها",
    link_ai: "ابزارها",
    link_contact: "تماس",
    link_blog: "بلاگ",
  },
  ps: {
    title: "حسیب الله حمیدی | بشپړ سټیک پراختیا کونکی او ښوونکی",
    lang_name: "پښتو",
    role_dev: "بشپړ سټیک پراختیا کونکی",
    role_educator: "د ICT ښوونکی",
    role_ai: "د هوش مصنوعي مینه‌وال",
    hero_paragraph:
      "زه پېچلي ستونزې په ښکلې سافټویر حلونو بدلوم او راتلونکی نسل د عملي، د صنعت اړونده مهارتونو سره پیاوړی کوم.",
    my_courses_btn: "زما کورسونه",
    ai_tools_btn: "د هوش مصنوعي وسایل",
    contact_me_btn: "اړیکه",
    courses_heading: "زما کورسونه",
    courses_sub:
      "په خپل راتلونکې کې پانګه واچوئ. هغه پلان انتخاب کړئ چې ستاسو د کاري اهدافو سره سمون لري.",
    course1_title: "هوش مصنوعي د هرچا لپاره",
    course1_desc:
      "د پیل کونکو لپاره مناسب کورس ترڅو د هوش مصنوعي درک، په ټولنه کې یې تاثیر او په ورځني ژوند کې د AI وسیلو عملي کارونه زده کړي — کوډ ته اړتیا نشته.",
    course2_title: "پایتون پراختیا",
    course2_desc:
      "له بنسټیزو سکریپتونو څخه تر پیچلو غوښتنلیکونو پورې، د نړۍ تر ټولو مشهور ژبه زده کړئ.",
    course3_title: "فرنټ‌اینډ ویب پراختیا",
    course3_desc:
      "ښکلي، غبرګون‌ور او متعامل کارن انٹرفیسونه د عصري ویب ټیکنالوژیو سره جوړ کړئ.",
    view_plans: "پلانونه وګورئ",
    ai_heading: "سپارش شوي د هوش مصنوعي وسایل",
    ai_sub:
      "د ځواکمنو AI ویب‌سایټونو او وسیلو لیست چې زه یې کاروم او سپارښتنه کوم.",
    search_ph: "د نوم یا ټګ له مخې ولټوه (مثلاً لیکنه، ویدیو)...",
    tool1_title: "ګوګل جیمینای",
    tool1_desc:
      "د ګوګل قوي څو‌رسنۍ هوش مصنوعي د پرمختللي استدلال، خبرې او کود تولید لپاره.",
    tool2_title: "چټ‌جی‌پي‌ټي",
    tool2_desc:
      "اصلي AI چټ مرسته کوونکی د انسان-څېرې متن تولید او د مختلفو دندو کې مرسته لپاره.",
    tool3_title: "میدجورني",
    tool3_desc: "یو مخکښ AI عکس جوړونکی چې د ساده متن څخه ښکلې لیدنې جوړوي.",
    visit_site: "سایټ وګورئ",
    contact_heading: "راځئ وصل شو",
    contact_sub:
      "یو پروژه لرئ یا غواړئ ګډ کار وکړئ؟ پیغام راولېږئ یا په ټولنیزو شبکو اړیکه ونیسئ.",
    send_message: "پیغام واستوئ",
    label_name: "نوم",
    label_email: "ایمیل",
    label_subject: "موضوع",
    label_message: "پیغام",
    send_btn: "پیغام واستوئ",
    email_heading: "ماته ایمیل",
    whatsapp_heading: "زمونږ سره اړیکه/واتس اپ",
    github_heading: "ګیټ‌هاب",
    email_address: "hasibullahhamidi@yahoo.com",
    phone_number: "+93 (0) 730 753 056",
    github_text: "github.com/hasibullahh",
    footer_desc:
      "بشپړ سټیک پراختیا کونکی او ښوونکی چې د ډیجیټل حلونو جوړولو او د پوهې شریکولو سره مینه لري.",
    footer_quick_links: "ګړندي لینکونه",
    footer_courses_heading: "کورسونه",
    footer_legal_heading: "حقوقي",
    footer_copyright: "© 2025 حسیب الله حمیدی. ټول حقونه محفوظ دي.",
    footer_made: "طراح او جوړ شوی د ❤️ سره په افغانستان کې",
    link_courses: "کورسونه",
    link_ai: "وسایل",
    link_contact: "اړیکه",
    link_blog: "بلاګ",
  },
};
(function () {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  const showAt = 200; // px scrolled before showing
  let pulseTimeout;

  function checkScroll() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > showAt) {
      btn.classList.add("show");
      // Add one-time signal (bounce + pulse)
      btn.classList.add("signal");
      clearTimeout(pulseTimeout);
      pulseTimeout = setTimeout(() => btn.classList.remove("signal"), 3000);
    } else {
      btn.classList.remove("show");
      btn.classList.remove("signal");
    }
  }

  // Smooth scroll to top on click
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    // use smooth behavior; fallback simple scroll if not supported
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // simple instant fallback
      window.scrollTo(0, 0);
    }
    // hide after click
    btn.classList.remove("show");
  });

  // show/hide on scroll with throttle
  let ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        checkScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // initial check
  checkScroll();
})();
