# Requirement Definition

## 🔧 **Project Name:**

**Ethereum Events**

### ☘️ Overall

It should have header and footer that links to Geodework(https://geodework.com)

---

## 🎯 **Goal:**

To provide a **clear, accessible, and global overview of annual crypto events**, helping users plan their event travel schedule with **practical information** like ticket deadlines, weather, dates, locations, context of the event — **without too much deep drill-down content**.

On the other hand, as an event organizer, I want to earn a spot on the website

- No need to login users for the first MPV.

---

## 🧑‍💻 **Target Users:**

- Crypto enthusiasts, builders, crypto-beginners, and nomads
- People planning travel or event attendance throughout the year
- Users who prefer light-weight info over in-depth side events
- An event organizer

---

## 🖥️ **Core Features & UI Components:**

### 1. 🔄 **Two UI Tabs / Layout Modes**

Users can toggle between Calendar View and List View

- **Calendar View Tab**
  - Monthly calendar at top
  - Only cards for that month displayed
- **List View Tab**
  - Annual Vertical list
  - All annual events shown in a scrollable list

### 2. 🗂️ **Collapsible Filters** (top of both views)

- Region (e.g. Asia, Europe, North America) as colourful icons for visualisation rather than mediocre drop down menu.
- country or city (optional search should pick up the keyword from the full address even though it is not displayed)
- Month / Quarter
- Modal for detailed filters (icon button beside dropdown)

### 3. 📅 **Calendar (in calendar tab)**

- Clean monthly grid (desktop-first but mobile-adapted)
- The dates of the events in the calendar should be displayed as a gantt chart style while should have relation to the events cards
- Events tied to dates
- Users can swipe or arrow to different months
  ### ✅ **Design + UX Approach**
  ### 1. **Gantt-style Calendar Rows**
  - Each **calendar cell** (day) can contain **horizontal bars** that represent events.
  - Bars span across multiple cells if the event is multi-day.
  - Each bar can map to an **event card** in a connected sidebar or drawer.
  ### 2. **Hover or Click Interaction**
  - **Hovering** over a bar: Shows a tooltip with brief info (Event Name, Date, Location).
  - **Clicking** on a bar: Scrolls to or highlights the corresponding **Event Card** below the calendar or in a sidebar/modal.
  ### 3. **Visual Linkage**
  - Use **consistent colors/icons** between the bar and the card.
  - Optional: draw a **subtle connecting line** or provide "linked hover state" (hovering over bar also highlights card, and vice versa).
  ### 4. **Overflow & Compact Mode**
  - Use stacking or grouping to avoid clutter.

### 4. 🃏 **Event Cards** (in both views)

Each card includes:

- Event Name
- Location (City, Country)
- Date(s)
- Average Temperature
- Optional: Flag/Region Icon or Tag
- **color-coded tags** or icons for each type (e.g. 🔧 for hackathons, 🎤 for conferences)

### 5. 📄 **Event Detail Page: Suggested Fields**

Each event card links to a full page or modal with the following:

- Event Name
- Location (City, Country)
- Date(s)
- Time Zone
- Average Temperature(can be fetched by API)
- Region Flag/Icon or Tag
- Color-coded Event Type Tag (e.g. 🎤 Conference, 🔧 Hackathon)
- Link to Official Website, SNS, and Organizer's link
- Add to Calendar / Export `.ics`
- 🔗 Share Button (Twitter, Telegram, Copy Link)

### 6. ⚙️ **Optional Features**

- Add to Google Calendar / Export as `.ics`
- Lazy loading (for List/Grid views)
- Responsive design (desktop/tabs/mobile)

### 7. Data

- The number of events is 80 at minimum.

---

### 📱 Mobile Strategy

> Just remove the Calendar (and Gantt layer) on mobile
>
> and default to the **List View / Vertical Layout**

### 🗂 Optional Enhancements for Mobile:

- Use **accordion-style month headers** to reduce scroll fatigue
- Stick a **floating filter button** (like a FAB) for quick filtering

### 🧩 **Design Philosophy:**

- Keep it **minimal**, **scannable**, and **lightweight**
- Prioritize **long-term event discovery**, not side events
- Avoid clutter or overly detailed nested info
- Respect both desktop **(calendar + scroll)** and mobile **(accordion/list)** usage
- Use Modern Flat Illustration
- Design
  Primary: --blue-700: 228,65%,50%;
  Accent: rgb(255, 213, 65);

**Accessibility & Typography Notes:**

- Prioritize **accessibility and legibility** across devices
- Use high-contrast text/background combinations for better readability
- Maintain **minimum tap area of 44x44px** for touch targets (buttons, cards, filters)
- Use responsive typography:
  - Headings: `1.25rem+` (20px+)
  - Body: `1rem` (16px) min
- Stick to **web-safe or widely supported fonts** with good rendering on Android/iOS
- Support dark mode if feasible (future enhancement)

### NOTE

If you have any questions, pause the process and ask me questions.
