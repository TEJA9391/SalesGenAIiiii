def get_company_analysis_prompt(lead) -> str:
    return f"""
You are an expert B2B sales analyst. Analyse the following company 
and provide structured insights.

Company Information:
- Company Name: {lead.company_name}
- Industry: {lead.industry}
- Company Size: {lead.company_size}
- Location: {lead.location}
- Funding Stage: {lead.funding_stage}
- Annual Revenue: {lead.annual_revenue}
- Technology Stack: {lead.technology_stack}

Provide your analysis in the following JSON format only. 
No extra text, just the JSON:

{{
    "business_needs": "what business problems this company likely faces",
    "opportunities": "specific opportunities to offer our AI sales platform",
    "industry_analysis": "current trends and challenges in their industry",
    "qualification_score": <number between 0 and 100>,
    "qualification_reasoning": "why you gave this score"
}}
"""
def get_lead_scoring_prompt(lead, insight) -> str:
    return f"""
You are an expert B2B sales strategist. Score this lead based on 
the company information and analysis provided.

Company Information:
- Company Name: {lead.company_name}
- Industry: {lead.industry}
- Company Size: {lead.company_size}
- Funding Stage: {lead.funding_stage}
- Annual Revenue: {lead.annual_revenue}
- Location: {lead.location}

AI Analysis Already Done:
- Business Needs: {insight.business_needs}
- Opportunities: {insight.opportunities}
- Initial Qualification Score: {insight.qualification_score}

Score this lead and respond in this JSON format only. No extra text:

{{
    "lead_score": <integer 0-100>,
    "conversion_probability": <float 0.0-1.0>,
    "priority_level": "<Hot or Warm or Cold>",
    "scoring_factors": "key factors that influenced this score",
    "recommended_action": "specific next action for the sales team"
}}
"""
def get_outreach_prompt(lead, insight, score) -> str:
    return f"""
You are an elite B2B enterprise sales strategist and executive copywriter. 
Analyze the lead intelligence below and generate:
1. A hyper-personalized, high-converting cold outreach email.
2. A professional sales rep strategic briefing / AI summary explaining the deal angle, buyer psychology, and conversion roadmap.

Prospect Information:
- Contact Name: {lead.contact_name}
- Company: {lead.company_name}
- Industry: {lead.industry}
- Company Size: {lead.company_size}
- Funding Stage: {lead.funding_stage}
- Location: {lead.location}

AI Intelligence & Signals:
- Business Needs: {insight.business_needs}
- Opportunities: {insight.opportunities}
- Lead Score: {score.lead_score}/100
- Priority: {score.priority_level}
- Recommended Action: {score.recommended_action}

Writing & Strategy Guidelines:
- Email must be crisp, impactful, under 150 words, and sound human and consultative.
- Avoid robotic clichés (e.g. "I hope this email finds you well" or "In today's fast-paced world").
- Tie their specific growth/funding/tech signals to quantifiable business outcomes (CAC reduction, pipeline velocity, automated intelligence).
- Single, low-friction call to action (CTA).
- The AI summary must provide actionable intelligence for the Account Executive (buyer motives, strategic hook, recommended multi-touch cadence).

Respond strictly in this JSON format only with no markdown wrapping or extra text:

{{
    "subject": "compelling executive subject line",
    "body": "personalized email body",
    "ai_summary": "2-3 sentence executive strategy briefing: why this prospect is ready now, psychological hook, and key conversion angle.",
    "value_proposition": "1 crisp sentence articulating the measurable ROI/value proposition.",
    "key_talking_points": [
        "Strategic point 1",
        "Strategic point 2",
        "Strategic point 3"
    ],
    "pain_points_addressed": [
        "Pain point 1",
        "Pain point 2"
    ],
    "suggested_cadence": "Day 1: Personalized Email ➔ Day 3: LinkedIn Touchpoint ➔ Day 5: Follow-up Call",
    "follow_up_timing": "Send follow-up in 3 business days if no response",
    "channel_recommendation": "Email (Primary) + LinkedIn InMail (Secondary)"
}}
"""
def get_conversation_analysis_prompt(transcript: str) -> str:
    return f"""
You are an expert sales conversation analyst. Analyse the following 
sales meeting transcript and extract structured intelligence.

Transcript:
{transcript}

Respond in this JSON format only. No extra text:

{{
    "summary": "2-3 sentence summary of the entire conversation",
    "key_discussion_points": [
        "point 1",
        "point 2",
        "point 3"
    ],
    "action_items": [
        "action item 1",
        "action item 2"
    ],
    "next_steps": "what happens after this meeting",
    "sentiment": "Positive or Neutral or Negative"
}}
"""
def get_followup_prompt(lead, score, conversation) -> str:
    return f"""
You are an expert B2B sales strategist. Based on the sales 
conversation and lead intelligence below, generate a smart 
follow-up recommendation.

Lead Information:
- Contact Name: {lead.contact_name}
- Company: {lead.company_name}
- Lead Score: {score.lead_score}/100
- Priority: {score.priority_level}
- Conversion Probability: {score.conversion_probability}

Conversation Summary:
- Summary: {conversation.summary}
- Sentiment: {conversation.sentiment}
- Next Steps: {conversation.next_steps}
- Action Items: {conversation.action_items}

Generate a follow-up strategy in this JSON format only. No extra text:

{{
    "follow_up_message": "the actual follow-up message to send",
    "timing": "exactly when to send this follow-up",
    "channel": "best channel to use",
    "talking_points": [
        "talking point 1",
        "talking point 2",
        "talking point 3"
    ],
    "deal_risk": "Low or Medium or High",
    "deal_risk_reasoning": "why this risk level was assigned"
}}
"""