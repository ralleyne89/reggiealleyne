

## Portfolio Rebranding: "UI/UX Designer" → "Product Designer & AI Technologist"

This plan implements the tactical advice to realign your portfolio branding, claiming the hybrid title that captures your premium value: coding + AI skills.

---

### Part 1: Homepage Headlines & Branding

**File:** `src/components/home/HeroSection.tsx`

| Current | New |
|---------|-----|
| `Product Designer & Creative Technologist` | `Product Designer & AI Technologist` |
| Image alt: `Reggie Alleyne - UI/UX Designer` | `Reggie Alleyne - AI Technologist` |
| Specializing in `0→1 Product Architecture`, `Design Systems`, `React Prototyping` | Specializing in `Human-in-the-Loop AI`, `Design Systems`, `React Prototyping` |

**Why:** "AI Technologist" is the keyword that catches recruiter eyes for AI PM roles. "Human-in-the-Loop" is the magic keyword for AI usability jobs.

---

### Part 2: Footer Bio Update

**File:** `src/components/layout/Footer.tsx`

| Current (Line 55-58) | New |
|---------|-----|
| "UI/UX Designer who codes, creating digital experiences that bridge the gap between vision and execution." | "Bridging the gap between human intent and machine logic. Product Designer & AI Technologist specializing in Human-in-the-Loop AI design." |

**Why:** Move the already-great AI PM language from your hero section to the footer. Eliminate "UI/UX Designer" which boxes you into Figma-only roles.

---

### Part 3: About Page Alignment

**File:** `src/pages/About.tsx`

**Changes:**
1. Update headline (line 88-89): `Product Designer & Creative Technologist` → `Product Designer & AI Technologist`
2. Reframe Gaming/Anime section (lines 223-231) from hobby to professional asset:
   
| Current | New |
|---------|-----|
| "But I'm dreaming bigger. I want to design for the industries that first made me fall in love with great experiences: gaming and anime." | "Passion for Immersive Interfaces: My background in gaming and anime inspires my approach to spatial computing and highly interactive UI. These industries taught me that the best experiences feel invisible—they just work." |

**Why:** Makes your hobby sound like a professional asset (Spatial UI/Interaction Design) rather than a fun preference that might distract "boring" enterprise companies.

---

### Part 4: SymptomCheckr "AI PM Lens" Section

**Goal:** Add a "Product Thinking" callout to the top of the case study that proves you understand the underlying tech stack and business risks.

**File:** `src/projects/symptom-checkr/data/symptomCheckrData.ts`

**New Data Structure (add after imports):**
```text
export const symptomCheckrAIPMData = {
  title: "The AI Challenge",
  challenge: "How do we handle it when the model hallucinates a wrong medical symptom?",
  dataStrategy: "We designed for graceful uncertainty—showing confidence levels and source citations so users can verify recommendations against medical literature.",
  successMetric: "User testing showed 78% reduction in anxiety when AI explanations included confidence intervals and source citations vs. black-box outputs."
}
```

**New Component:** `src/components/project/common/AIProductThinking.tsx`
- A highlighted callout card at the top of case studies
- Shows: The AI Challenge → Data Strategy → Success Metric
- Visual: Blue/primary accent card that stands out

**File:** `src/projects/symptom-checkr/SymptomCheckrCaseStudy.tsx`
- Add `<AIProductThinking {...symptomCheckrAIPMData} />` after `<ProjectOverviewComponent>`

---

### Part 5: Litmus AI "AI PM Lens" Section

**File:** `src/projects/litmus-ai/data/litmusAIData.ts`

**New Data Structure:**
```text
export const litmusAIAIPMData = {
  title: "The AI Challenge",
  challenge: "How do we test genuine understanding vs. buzzword familiarity without requiring hours of assessment?",
  dataStrategy: "Leveraged GPT-5 for dynamic question generation with prompt engineering, enabling adaptive difficulty that responds to user responses in real-time.",
  successMetric: "Compressed 2-hour traditional assessments into 5-minute adaptive tests while maintaining assessment accuracy through intelligent question selection."
}
```

**File:** `src/projects/litmus-ai/LitmusAICaseStudy.tsx`
- Add `<AIProductThinking {...litmusAIAIPMData} />` after `<ProjectOverviewComponent>`

---

### Part 6: SymptomCheckr Subtitle for Trust Design

**File:** `src/services/api/projects/symptomCheckr.ts`

**Update project title/tagline to emphasize "Trust in Probabilistic AI":**

| Current | New |
|---------|-----|
| Title: "AI-Powered Symptom Checker" | "SymptomCheckr: Designing for Trust in Probabilistic AI" |

**File:** `src/projects/symptom-checkr/data/symptomCheckrData.ts`

**Add "Human-in-the-Loop Error Handling" callout to Final UI section:**
- Add an explicit UI feature highlighting the "AI can make mistakes" disclaimer
- Label it as "Human-in-the-Loop Error Handling"

This instantly qualifies you for Trust & Safety and AI Ethics roles.

---

### Part 7: Fix Build Error (Edge Function)

**File:** `supabase/functions/send-contact-email/index.ts`

The build error indicates a missing dependency configuration. The Resend import needs to be in a deno.json file or use a different import method.

**Solution:** Change line 3 from:
```text
import { Resend } from "npm:resend@2.0.0"
```
to:
```text
import { Resend } from "https://esm.sh/resend@2.0.0"
```

Using esm.sh is the recommended approach for Deno edge functions.

---

### Summary of Files to Modify

| File | Changes |
|------|---------|
| `src/components/home/HeroSection.tsx` | Update title to "AI Technologist", add "Human-in-the-Loop AI" specialization |
| `src/components/layout/Footer.tsx` | Replace "UI/UX Designer who codes" with AI PM language |
| `src/pages/About.tsx` | Update headline, reframe gaming/anime as professional asset |
| `src/projects/symptom-checkr/data/symptomCheckrData.ts` | Add AI PM data, add Human-in-the-Loop error handling UI feature |
| `src/projects/symptom-checkr/SymptomCheckrCaseStudy.tsx` | Add AIProductThinking component |
| `src/projects/litmus-ai/data/litmusAIData.ts` | Add AI PM data |
| `src/projects/litmus-ai/LitmusAICaseStudy.tsx` | Add AIProductThinking component |
| `src/services/api/projects/symptomCheckr.ts` | Update title to emphasize Trust Design |
| `src/components/project/common/AIProductThinking.tsx` | Create new component |
| `supabase/functions/send-contact-email/index.ts` | Fix Resend import for Deno |

---

### Expected Outcome

After implementation:
- **LinkedIn-ready positioning**: "Product Designer & AI Technologist | Human-in-the-Loop AI | React + UX Strategy"
- **Case studies prove PM thinking**: AI Challenge → Data Strategy → Success Metric format
- **SymptomCheckr becomes Trust goldmine**: Explicitly positioned for Trust & Safety and AI Ethics roles
- **Gaming/Anime reframed**: Sounds like Spatial UI expertise, not hobby preference
- **Build error fixed**: Edge function deploys successfully

