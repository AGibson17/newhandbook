# NexGov Employee Handbook — AI System Guidelines

Use this document to guide all AI and human contributors when generating designs, components, or code for the NexGov Employee Handbook project.  
**Keep this file updated as the system evolves!**

---

## General Principles

- Prioritize responsive, mobile-first layouts using flexbox and grid; avoid absolute positioning unless for overlays/tooltips.
- Use only NexGov brand colors, typography, icons, and spacing tokens as specified below.
- Maintain high accessibility and contrast at all times (WCAG AA minimum).
- Build with clear, modular components—each element should be reusable.

---

## Design Tokens

### Colors

| Name         | Hex     |
| ------------ | ------- |
| Navy         | #0C1C33 |
| Blue         | #1C3354 |
| Sky          | #477E9F |
| Arctic       | #F0F8F9 |
| Frozen Blue  | #A7C6DB |
| Red (Accent) | #C72C34 |
| White        | #FFFFFF |

#### Color Palette

Our color palette consists of shades of Navy, Sky, and Arctic blues, laying the foundation for a professional, sophisticated, dependable brand. They provide a subtle canvas that allows the accent Red to stand out.
Red, while a primary color, should be used sparingly as a pop of color. It is bold, vibrant, and attention-grabbing while not overpowering the blue-based palette.

### Typography

- **Headlines:** Runda Light (fallback: Aptos Light), weights 300–400, always sentence case.
- **Body:** Inter Regular, 400.
- **Eyebrow/Labels:** Runda Bold, uppercase, 18px, letter-spacing: 0.05em.
- **No text smaller than 14px.**

### Spacing & Sizing

- Use increments of 4px for spacing.
- Border radius for cards/buttons: 16px
- Icon container: 48px, 12px radius
- Shadow: 0 1px 6px rgba(28,51,84,0.08); up to 0 4px 20px rgba(28,51,84,0.15)

---

## Components

### Navigation

- **Desktop:** Vertical tabs (left), header (top), content panel (right).
- **Mobile:** Accordions for each main section (Welcome, How to Use, Employee Handbook, FAQs/Help).
- Tab/accordion labels always include icons; highlight active section with Sky or Blue.
- Header includes logo, handbook title, and subtitle.

### Category Cards (In "Employee Handbook" Section)

- Card: White background, 16px radius, 24px vertical padding, subtle Blue shadow.
- Left: Icon in 48x48px Frozen Blue container.
- Right: Title (Navy, 20–24px), one-line description (Blue or Sky, 16px).

## Policy Categories

### 1. Getting Paid

Learn how and when you get paid, what shows up on your paycheck, and how to manage things like timekeeping, direct deposit, and pay adjustments.

### 2. Taking Time Off

Find out how to request time off, understand your leave options, and review policies for holidays, sick days, PTO, and special types of leave.

### 3. Doing Your Job

Explore policies that shape your everyday work experience — from job expectations and conduct to remote work, equipment, and scheduling.

### 4. Staying Safe

Review safety practices, injury reporting, drug and alcohol guidelines, and health-related policies that keep you and others protected at work.

### 5. Getting Support

Learn who to contact, how to request accommodations, and where to go for help with HR questions, benefits, or workplace concerns.

### 6. Leaving or Changing Roles

Understand what happens if you resign, transfer, or experience a change in your role — plus key exit procedures and employment classification info.

### Overlays (State-Specific Notices/Warnings)

- Appear at the top of a policy/card, above main content.
- Use the following styles:
  - **Standard Overlay:** Navy background, White text, 16px radius.
  - **Warning/Alert Overlay:** Red background, White text, 16px radius, warning icon.
  - **Info Overlay:** Sky background, Navy text, 16px radius.
- Always includes a label ("CA Law Applies", "Important", "Notice", etc.) and an optional close/dismiss button (if not persistent).

### Buttons

- **Primary:** Filled, Sky or Blue background, White text, 16px radius, bold label.
- **Secondary:** Outline (Blue or Navy border), White fill, Blue text, 16px radius.
- **Tertiary:** Text-only, Sky or Blue text, no border or fill.
- Only one primary button per group; secondary/tertiary for alternatives.
- Min size: 44px tall, tap target always ≥44px.

### Forms

- **Inputs:** White fill, Blue border, 12px radius, 16px font, label above input (Inter, 14px, Blue).
- **Text areas:** Same as inputs, min height 80px.
- **Selects:** Styled like inputs, with custom dropdown arrow, no browser default.
- **Validation errors:** Red border, Red text under field.
- **Success:** Sky or Green (if introduced), message below field.
- **Search bar:** Full-width, rounded, subtle Blue border, search icon left, clear button right.

### Modals

- Background: Arctic, 20px radius.
- Shadow: 0 4px 20px rgba(28,51,84,0.15)
- Dismiss/close in upper right.

### Iconography

- Icons are geometric, minimal, use only brand colors.
- Never use shaded or photoreal icons; avoid stock icons unless customized to match style.
- Icon library should be maintained in Figma and exported as SVG.

---

## Patterns

- **Accordion:** Use for mobile navigation of core handbook sections. Only one open at a time, smooth animation for expand/collapse.
- **Sticky Headers:** On mobile and desktop for persistent nav/title.
- **No floating buttons, hamburger nav, or drawer menus.**

---

## States & Interactivity

- Hover/focus for desktop, pressed for mobile.
- Disabled: 40% opacity, no pointer events.
- All clickable elements must have accessible ARIA roles.

---

## FAQ / Feedback Form

- Route to FAQ/Help section.
- Inputs: Name (optional), Email (required), Topic (dropdown), Message (textarea).
- Submit button: Primary style; disabled until all required fields are valid.
- Success and error overlays/messages use standard overlay styles.

---

## Do Nots

- Do not use non-brand colors, gradients, or drop shadows beyond system tokens.
- No text smaller than 14px, no unreadable color combos.
- No skeuomorphic or material effects.
- No browser default buttons, inputs, or selects—everything styled to match system.

---

## File & Component Structure

- Place all variables/tokens in one "Design Tokens" frame/page.
- Components must use PascalCase naming.
- Maintain an "Icons" frame with all SVG icons.
- Accordions, buttons, overlays, forms: keep as distinct, master components for reuse.
- Each new Figma file must include or link to this guideline.

---

## End of Guidelines

Paste this as `AI-GUIDELINES.md` in every new Figma or dev project. Update as the system evolves.