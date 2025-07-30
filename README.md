## Objective:
To simulate engineered bacteria navigating towards a tumor site. This simulation explores basic concepts of bacteria movement and chemotaxis (movement toward chemical gradients), a phenomenon that has potential applications in targeted cancer treatment.

## Motivation:
- Aligns with Dr. Suh’s Research on cancer-targeting micro-bio robots and probiotics in bio-robot systems.
- This simulation demonstrates a core principle for any such system: autonomous movement toward a target (tumor).
- The long-term vision is to develop this simple simulation into a full-fledged tool for studying bacterial navigation in medical applications.

## Simulated Features:
- A simple, visually-guided 20x20 grid.
- Red dot represents a tumor.
- Green dots represent bacteria, which move toward the tumor.
- Bacteria randomly wander or directly head toward the tumor, mimicking chemotaxis behavior.

## Future Vision:
This is a proof of concept. Here are the envisioned expansions:
•	Chemotaxis-based Movement: Simulate gradient sensing for more realistic behavior.
•	Bacteria Growth/Death: Implement mechanisms for bacteria to “die” if they stray too far from the target or after a set time.
•	Collision Avoidance: Add features where bacteria avoid colliding with each other while navigating.
•	Real-World Simulation: Eventually integrate real-world variables, such as pH, temperature, and bacterial response to these conditions.
Tools and Technology Used:
•	Frontend: React for UI rendering and state management.
•	Styling: HTML, CSS for fast, responsive design.
•	Logic: Simple JavaScript algorithms to model bacteria movement.
Contact:
For further questions or feedback, feel free to reach out to me via GitHub issues or at my email

## Demo
https://bacteria-sim-ui.vercel.app/ 

---
Made by Sara Younus Gilani
