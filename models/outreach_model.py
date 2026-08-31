from pydantic import BaseModel, Field
from typing import Optional, List


class OutreachEmail(BaseModel):
    """AI-generated personalised cold outreach email and professional strategic briefing."""

    subject: str = Field(..., description="Compelling, specific executive email subject line")
    body: str = Field(..., description="Full email body — concise, persona-driven, one CTA")
    ai_summary: Optional[str] = Field(None, description="Executive briefing and outreach strategy summary for sales reps")
    value_proposition: Optional[str] = Field(None, description="Crisp ROI-focused value proposition tailored to prospect")
    key_talking_points: Optional[List[str]] = Field(default_factory=list, description="Top strategic talking points")
    pain_points_addressed: Optional[List[str]] = Field(default_factory=list, description="Key prospect pain points targeted")
    suggested_cadence: Optional[str] = Field(None, description="Multi-touch sequence roadmap across channels")
    follow_up_timing: str = Field(..., description="When to follow up if no reply received")
    channel_recommendation: str = Field(..., description="Best channel to reach this prospect")


OutreachModel = OutreachEmail