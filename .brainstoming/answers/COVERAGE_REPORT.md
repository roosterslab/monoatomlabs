# Coverage Report — ask-* prompts → answers

This report confirms that each *question/prompt file* under `.brainstoming/ask-*` has a corresponding answer file under `.brainstoming/answers/*`.

Notes:
- Several prompt repos include meta/docs (e.g., `README.md`, frameworks, checklists). These are not treated as “questions requiring answer files”, so they are not mapped 1:1.
- All answer content continues to follow the grounding rule: only `source-contents/` can be asserted as factual.

## Status
- Coverage: **OK** (no missing answer files detected for the prompt/question files listed below)

## Mappings checked

### ask-for-business-details
- Prompts (9): `*_business_details.md`
- Answers (9): one per product
  - Commercial: `graphacrete`, `graffisol`, `ceraphene`, `hdgpe`
  - Pipeline: `armophene`, `graphosite`, `graphyre`, `rustene`, `thermaphene`

### ask-for-customer-commercials
- Prompts (16): 4 products × 4 templates (`value_proposition`, `roi_calculator`, `tco_analysis`, `case_study_template`)
- Answers (16): mirrored under product folders
  - `answers/ask-for-customer-commercials/<product>/*`

### ask-for-market-research-figures-impact-research-ask
- Prompts (2):
  - `01-CERAPHENE-market-research-request.md`
  - `02-GRAFFISOL-market-research-request.md`
- Answers (2):
  - `answers/ask-for-market-research-figures-impact-research-ask/ceraphene/market_research_response.md`
  - `answers/ask-for-market-research-figures-impact-research-ask/graffisol/market_research_response.md`

### ask-for-maths-formulas
- Prompts (4): `graphacrete_formulas.md`, `graffisol_formulas.md`, `ceraphene_formulas.md`, `hdgpe_formulas.md`
- Answers (4): `answers/ask-for-maths-formulas/<product>/grounded_formulas.md`

### ask-from-our-scientists
- Prompts (5):
  - 4× product validation: `01-product-validation/*-technical-validation.md`
  - 1× scale-up: `04-scale-up-manufacturing/scale-up-questions.md`
- Answers (5):
  - `answers/ask-from-our-scientists/product-validation/*-technical-validation-answers.md`
  - `answers/ask-from-our-scientists/scale-up-manufacturing/scale-up-questions-answers.md`
