/*
  নিজের ওয়েবসাইট সাজাতে এই ফাইলটি এডিট করো।
  name = বাটনে যে নাম দেখাবে
  description = নামের নিচের ছোট লেখা
  icon = ইমোজি
  url = তোমার গ্রুপ/চ্যানেল/ওয়েবসাইটের লিংক
  নতুন বাটন যোগ করতে links তালিকায় আরেকটি { ... } যোগ করো।
*/
const CONFIG = {
  title: "MY LINKS",
  subtitle: "সব গুরুত্বপূর্ণ লিংক এক জায়গায়",
  avatar: "M", // এখানে নিজের নামের প্রথম অক্ষর বা ইমোজি দাও
  links: [
    { name: "Telegram Group", description: "আমাদের Telegram গ্রুপে যোগ দিন", icon: "✈️", url: "https://t.me/your_group" },
    { name: "Telegram Channel", description: "নতুন আপডেট পেতে চ্যানেলে যুক্ত হন", icon: "📢", url: "https://t.me/your_channel" },
    { name: "WhatsApp Group", description: "WhatsApp কমিউনিটিতে যোগ দিন", icon: "💬", url: "https://chat.whatsapp.com/your_invite" },
    { name: "WhatsApp Channel", description: "আমাদের WhatsApp Channel ফলো করুন", icon: "🟢", url: "https://whatsapp.com/channel/your_channel" },
    { name: "YouTube Channel", description: "ভিডিও দেখতে সাবস্ক্রাইব করুন", icon: "▶️", url: "https://youtube.com/@your_channel" },
    { name: "Instagram", description: "Instagram-এ ফলো করুন", icon: "📸", url: "https://instagram.com/your_username" },
    { name: "Facebook Page", description: "Facebook পেজে যুক্ত থাকুন", icon: "📘", url: "https://facebook.com/your_page" }
  ]
};

document.title = `${CONFIG.title} | Connect With Me`;
document.getElementById("siteTitle").textContent = CONFIG.title;
document.getElementById("siteSubtitle").textContent = CONFIG.subtitle;
document.getElementById("avatar").textContent = CONFIG.avatar;
document.getElementById("footerName").textContent = CONFIG.title;

const container = document.getElementById("links");
const validLinks = CONFIG.links.filter(item => item.url && !item.url.includes("your_"));
if (!validLinks.length) {
  container.innerHTML = '<div class="empty">links.js ফাইলে নিজের লিংকগুলো যোগ করো।</div>';
} else {
  validLinks.forEach(item => {
    const a = document.createElement("a");
    a.className = "link";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    const icon = document.createElement("span");
    icon.className = "ico";
    icon.textContent = item.icon || "🔗";
    const info = document.createElement("span");
    info.className = "info";
    const name = document.createElement("span");
    name.className = "name";
    name.textContent = item.name;
    const desc = document.createElement("span");
    desc.className = "desc";
    desc.textContent = item.description || "এখানে ক্লিক করুন";
    info.append(name, desc);
    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.textContent = "↗";
    a.append(icon, info, arrow);
    container.appendChild(a);
  });
}
