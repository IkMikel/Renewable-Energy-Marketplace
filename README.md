# GreenConnect Nigeria

> **Tagline:** Connecting Homes and Businesses to Reliable Solar Energy Providers.

GreenConnect Nigeria is a modern, responsive web platform designed to bridge the gap between accredited renewable energy providers and Nigerian homes and businesses seeking reliable, 24/7 clean electricity. By addressing erratic national grid power and crippling generator fuel expenses, GreenConnect empowers users to discover vetted solar installers, compare transparent quotes, and book professional solar consultations with confidence.

---

## 🌟 Key Features Across 5 Core Pages

### 1. Home Page (`index.html`)
- **Platform Introduction & Hero Section:** Clear value proposition highlighting Nigeria's renewable energy transition with prominent calls to action (*[Find Providers]* & *[Become a Provider]*).
- **The Energy Problem vs. Solar Solution:** Direct comparison between volatile petrol/diesel generator expenses, power cuts, noise pollution, and the benefits of silent, zero-fuel 24/7 solar power.
- **Why Choose Solar?:** Core benefits covering cost savings, equipment durability, and carbon footprint reduction.
- **Featured Providers:** Dynamic card highlights of top vetted Nigerian solar installers.
- **How It Works & Call to Action:** 4-step seamless onboarding flow leading to free quotes.

### 2. Providers Directory (`providers.html`)
- **Dynamic JavaScript Provider Cards:** Dynamically generated provider cards featuring verified ratings, services, locations, and starting prices in Nigerian Naira (₦).
- **Interactive Search & Filtering:**
  - Real-time text search by company name, keywords, or Nigerian cities.
  - Category filters (*Solar Installation*, *Battery Solutions*, *Inverter Systems*, *Mini-Grid & Commercial*).
  - State filters (*Lagos State*, *Abuja FCT*, *Rivers State*, *Oyo State*, *Kano State*, *Kaduna State*).
  - Dynamic result counter and one-click filter reset.

### 3. Provider Details Page (`details.html`)
- **Deep-Dive Company Profiles:** Reads URL parameters (`?id=provider-id`) to load specific installer profiles dynamically.
- **Services Checklist:** Visual checklist with checkmarks (`✓ Solar Installation`, `✓ Battery Backup`, `✓ Inverter Systems`).
- **Standardized Packages:** Tiered packages (e.g., 1.5kVA Starter, 3.5kVA Family, 5kVA–10kVA Executive Villa).
- **Direct Contacts & Pricing:** Transparent starting prices (`₦250,000`), phone numbers, official email, and physical office addresses.
- **Direct Consultation Booking:** One-click prefilled booking trigger.

### 4. Booking & Service Request (`booking.html`)
- **Comprehensive Service Form:** Captures Full Name, Email, Phone Number, Location (State & City), Needed Service (dropdown), Preferred Provider (dropdown), and Energy Requirements/Appliances message.
- **Robust JavaScript Validation:**
  - Empty field checks with inline visual feedback.
  - Strict email format validation.
  - Nigerian phone number format validation.
- **Interactive Confirmation Modal (Popup):** Generates a custom booking reference code (e.g. `GC-NG-XXXXXX`), summarizes requested services and assigned provider, and outlines the 24-hour callback expectation.

### 5. About Page (`about.html`)
- **Vision & Mission Statement:**
  > *"GreenConnect Nigeria aims to bridge the gap between renewable energy providers and homes seeking reliable electricity. Our vision is to become Africa's largest renewable energy marketplace."*
- **The Nigerian Energy Story:** Context on tackling grid vulnerability and eliminating generator dependency.
- **Core Values:** Trust & Verification, Pricing Transparency, Environmental Sustainability, and Customer Advocacy.
- **Technology & Expansion Roadmap:** Overview of current architecture and planned backend/fintech services.

---

## 📁 Folder Structure

```
greenconnect/
│
├── index.html          # Platform Home page with problem/solution, hero, & featured providers
├── providers.html      # Directory page with dynamic JS cards and live search/filter
├── details.html        # Provider details page with services checklist, prices, & packages
├── booking.html        # Service booking form with JS validation and confirmation popup
├── about.html          # Vision, mission, company values, and roadmap page
│
├── css/
│   └── style.css       # Main stylesheet (responsive grid, CSS variables, mobile menu, modals)
│
├── js/
│   └── app.js          # Core JavaScript (provider database, card renderer, filters, modal)
│
├── images/
│   ├── logo.png        # Brand identity logo
│   ├── solar1.jpg      # Rooftop solar installation hero graphic
│   └── solar2.jpg      # Advanced battery storage & inverter systems graphic
│
└── README.md           # Project documentation and specifications
```

---

## 💻 Technologies Used

### Frontend (Current Production Stack)
- **HTML5:** Semantic markup, accessibility features, and mobile-first metadata.
- **CSS3:** Custom CSS variables, responsive CSS Grid and Flexbox layouts, interactive modal overlays, and fluid typography.
- **JavaScript (ES6+):** Dynamic DOM manipulation, array filtering algorithms, URLSearchParams parsing, and real-time form validation.

### Future Expansion Roadmap (Backend & Fintech)
- **Runtime & Framework:** Node.js & Express.js RESTful microservices.
- **Database:** MongoDB & Mongoose for provider catalog and booking inquiries.
- **Payment & Escrow APIs:**
  - **Paystack API:** Automated deposits, customer verification, and installment billing.
  - **Flutterwave API:** Cross-border African multi-currency transactions.
- **IoT & Smart Monitoring:** Telemetry integration with smart solar inverters for live system health and battery monitoring.

---

## 🚀 How to Run and Test Locally

### Option 1: Using Python's Built-in HTTP Server (Recommended)
Open your terminal in the project directory and run:

```bash
# Python 3
python3 -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your web browser.

### Option 2: Using Node.js `npx serve`
```bash
npx serve .
```

### Option 3: Direct File Opening
Double-click `index.html` or open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 📞 Support & Community
- **Website:** GreenConnect Nigeria
- **Email:** info@greenconnect.ng
- **Phone:** 080-12345678
- **Coverage:** Lagos, Abuja, Port Harcourt, Ibadan, Kano, Kaduna, and all 36 States across Nigeria.
