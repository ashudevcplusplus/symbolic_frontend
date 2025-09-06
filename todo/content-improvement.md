# Content Improvement Todos

## 🔴 Critical Priority (P0)

### 1. Fix Mobile Typography Issues
**Priority**: P0 | **Effort**: 2 hours | **Impact**: High
- **Issue**: H1 text wraps to 3+ lines on mobile (360w viewport)
- **Current**: `text-5xl` causes excessive line breaks
- **Fix**: Reduce to `text-4xl` on mobile screens
- **Location**: `components/Hero.tsx:57`
- **Acceptance**: H1 displays ≤2 lines on 360w viewport
- **Dependencies**: None

### 2. Implement Proper Paragraph Measure
**Priority**: P0 | **Effort**: 3 hours | **Impact**: High
- **Issue**: Body text measure is ~75ch, exceeding optimal 48-65ch range
- **Current**: `max-w-narrow` (680px) used throughout
- **Fix**: Create `max-w-prose` utility (65ch) and apply to body copy
- **Location**: Multiple components (Hero, Features, etc.)
- **Acceptance**: All body paragraphs use 48-65ch measure
- **Dependencies**: Tailwind config update

### 3. Add Missing Meta Descriptions
**Priority**: P0 | **Effort**: 1 hour | **Impact**: Medium
- **Issue**: Generic meta descriptions don't reflect actual content
- **Current**: Basic descriptions in `index.html`
- **Fix**: Add specific, compelling meta descriptions for each section
- **Location**: `index.html:9-11`
- **Acceptance**: Unique, descriptive meta tags for SEO
- **Dependencies**: Content strategy

## 🟠 High Priority (P1)

### 4. Enhance Hero Messaging
**Priority**: P1 | **Effort**: 4 hours | **Impact**: High
- **Issue**: Current headline "Precision for Mission-Critical AI" could be more compelling
- **Current**: Generic AI precision messaging
- **Fix**: Create more specific, benefit-driven headlines
- **Location**: `components/Hero.tsx:59`
- **Acceptance**: Headline clearly communicates unique value proposition
- **Dependencies**: Brand positioning

### 5. Improve Call-to-Action Copy
**Priority**: P1 | **Effort**: 2 hours | **Impact**: High
- **Issue**: CTAs are generic ("Join Waitlist", "Read Problem")
- **Current**: Non-specific action words
- **Fix**: Create compelling, action-oriented CTAs
- **Location**: `components/Hero.tsx:77,83`
- **Acceptance**: CTAs drive specific user actions
- **Dependencies**: Conversion strategy

### 6. Add Social Proof Content
**Priority**: P1 | **Effort**: 3 hours | **Impact**: High
- **Issue**: Social proof bar has placeholder content
- **Current**: Generic "Trusted by leading companies"
- **Fix**: Add real customer logos and testimonials
- **Location**: `components/SocialProofBar.tsx`
- **Acceptance**: Real customer logos and specific testimonials
- **Dependencies**: Customer relationships

### 7. Enhance Feature Descriptions
**Priority**: P1 | **Effort**: 4 hours | **Impact**: Medium
- **Issue**: Feature descriptions are technical but lack user benefits
- **Current**: Focus on technical capabilities
- **Fix**: Rewrite to emphasize user outcomes and benefits
- **Location**: `components/Features.tsx`
- **Acceptance**: Features clearly communicate user value
- **Dependencies**: User research

## 🟡 Medium Priority (P2)

### 8. Improve FAQ Content
**Priority**: P2 | **Effort**: 3 hours | **Impact**: Medium
- **Issue**: FAQ questions don't address common user concerns
- **Current**: Generic questions about features
- **Fix**: Research and add real user questions
- **Location**: `components/FAQ.tsx`
- **Acceptance**: FAQ addresses actual user pain points
- **Dependencies**: User feedback

### 9. Add Blog/Resource Content
**Priority**: P2 | **Effort**: 6 hours | **Impact**: Medium
- **Issue**: No content marketing strategy
- **Current**: No blog or resource section
- **Fix**: Add blog teasers and resource links
- **Location**: New component needed
- **Acceptance**: Content marketing section with valuable resources
- **Dependencies**: Content creation

### 10. Enhance Pricing Descriptions
**Priority**: P2 | **Effort**: 2 hours | **Impact**: Medium
- **Issue**: Pricing tiers lack clear differentiation
- **Current**: Generic feature lists
- **Fix**: Add clear value propositions for each tier
- **Location**: `components/Pricing.tsx`
- **Acceptance**: Each tier has clear, compelling value proposition
- **Dependencies**: Pricing strategy

### 11. Improve Error Messages
**Priority**: P2 | **Effort**: 2 hours | **Impact**: Low
- **Issue**: No user-friendly error handling
- **Current**: Technical error states
- **Fix**: Add helpful, actionable error messages
- **Location**: Throughout components
- **Acceptance**: All errors have user-friendly messages
- **Dependencies**: Error boundary implementation

## 🟢 Low Priority (P3)

### 12. Add Microcopy Improvements
**Priority**: P3 | **Effort**: 2 hours | **Impact**: Low
- **Issue**: Button labels and helper text could be more engaging
- **Current**: Standard UI copy
- **Fix**: Add personality and clarity to microcopy
- **Location**: Throughout components
- **Acceptance**: All microcopy is engaging and clear
- **Dependencies**: Brand voice guidelines

### 13. Enhance Loading States
**Priority**: P3 | **Effort**: 3 hours | **Impact**: Low
- **Issue**: Generic loading spinners
- **Current**: Basic loading states
- **Fix**: Add contextual loading messages
- **Location**: `App.tsx`, `LongLandingPage.tsx`
- **Acceptance**: Loading states provide context
- **Dependencies**: None

### 14. Add Tooltips and Help Text
**Priority**: P3 | **Effort**: 4 hours | **Impact**: Low
- **Issue**: Complex features lack explanation
- **Current**: No help text or tooltips
- **Fix**: Add helpful tooltips for complex features
- **Location**: Feature components
- **Acceptance**: Complex features have helpful explanations
- **Dependencies**: UX research

## 📊 Content Improvement Summary

- **Total Items**: 14
- **Critical (P0)**: 3 items
- **High (P1)**: 4 items  
- **Medium (P2)**: 4 items
- **Low (P3)**: 3 items
- **Estimated Total Effort**: 40 hours
- **High Impact Items**: 7 items

## 🎯 Quick Wins (Can be done immediately)

1. Fix mobile H1 typography (2 hours)
2. Add missing meta descriptions (1 hour)
3. Improve CTA copy (2 hours)
4. Add contextual loading messages (3 hours)

**Total Quick Win Effort**: 8 hours