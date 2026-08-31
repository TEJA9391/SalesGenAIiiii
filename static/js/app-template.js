/**
 * app-template.js
 * Injects the entire SalesGenie application HTML into the #app container.
 * Auto-generated from index.html — do not edit manually.
 */
(function() {
  var app = document.getElementById('app');
  if (!app) { console.error('SalesGenie: #app container not found'); return; }
  app.innerHTML = `
  <!-- ── FULL APP LAYOUT WITH LEFT SIDE DRAWER ── -->
  <div class="app-layout-wrapper">

    <!-- ── LEFT SIDE DRAWER MENU ── -->
    <aside class="app-side-drawer" id="appSideDrawer">
      <div class="drawer-top-section">
        <!-- Brand Header -->
        <div class="drawer-brand-row">
          <div class="drawer-brand-link" onclick="navigateTo(currentUser ? 'leads' : 'landing')">
            <div class="brand-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.5L19.5 6.8V17.2L12 21.5L4.5 17.2V6.8L12 2.5Z" stroke="#ffffff" stroke-width="1.6" stroke-linejoin="round" fill="rgba(255, 255, 255, 0.08)"/>
                <path d="M12 7.2L16.2 9.6V14.4L12 16.8L7.8 14.4V9.6L12 7.2Z" fill="#ffffff" stroke="#60a5fa" stroke-width="1.2"/>
                <circle cx="12" cy="12" r="1.6" fill="#0f172a"/>
              </svg>
            </div>
            <div class="brand-text">
              <span class="brand-title">SalesGenie</span>
              <span class="brand-subtitle">Enterprise Platform</span>
            </div>
          </div>
        </div>

        <!-- Navigation Group -->
        <div class="drawer-nav-group">
          <div class="drawer-nav-label">WORKSPACE</div>
          
          <button class="drawer-nav-item active" id="drawerNavLeads" onclick="navigateTo('leads')" title="Leads Pipeline">
            <div class="drawer-nav-item-left">
              <i data-lucide="crosshair"></i>
              <span class="drawer-nav-text">Leads</span>
            </div>
            <span class="drawer-badge" id="drawerLeadsCountBadge">8</span>
          </button>

          <button class="drawer-nav-item" id="drawerNavRadar" onclick="navigateTo('radar')" title="Buying Intent & Signal Radar">
            <div class="drawer-nav-item-left">
              <i data-lucide="radio"></i>
              <span class="drawer-nav-text">Signal Radar</span>
            </div>
            <span class="drawer-badge" style="background: #2563eb; color: #fff;">LIVE</span>
          </button>

          <button class="drawer-nav-item" id="drawerNavOutreach" onclick="navigateTo('outreach')" title="Outreach Generator">
            <div class="drawer-nav-item-left">
              <i data-lucide="send"></i>
              <span class="drawer-nav-text">Outreach</span>
            </div>
          </button>

          <button class="drawer-nav-item" id="drawerNavConversations" onclick="navigateTo('conversations')" title="Conversation Intelligence">
            <div class="drawer-nav-item-left">
              <i data-lucide="message-square"></i>
              <span class="drawer-nav-text">Conversations</span>
            </div>
          </button>

          <button class="drawer-nav-item" id="drawerNavDashboard" onclick="navigateTo('dashboard')" title="Analytics Dashboard">
            <div class="drawer-nav-item-left">
              <i data-lucide="layout-dashboard"></i>
              <span class="drawer-nav-text">Dashboard</span>
            </div>
          </button>

          <button class="drawer-nav-item" id="drawerNavCrm" onclick="navigateTo('crm')" title="CRM Sync">
            <div class="drawer-nav-item-left">
              <i data-lucide="refresh-cw"></i>
              <span class="drawer-nav-text">CRM Sync</span>
            </div>
          </button>
        </div>


        <!-- Quick Action Add Lead Button -->
        <div class="drawer-quick-action">
          <button class="drawer-add-btn" onclick="openAddLeadModal()" title="Add New Lead">
            <i data-lucide="plus"></i>
            <span class="drawer-add-text">Add New Lead</span>
          </button>
        </div>
      </div>

                  <!-- Drawer Footer: User Profile & Session with Right-Side Hover Flyout -->
      <div class="drawer-footer">
        <!-- Right-Side Hover Flyout Menu -->
        <div class="drawer-user-flyout" id="drawerUserFlyout">
          <div class="user-dropdown-header">
            <div class="user-dropdown-avatar" id="flyoutUserAvatar">T</div>
            <div class="user-dropdown-info">
              <div class="user-dropdown-name" id="flyoutUserName">Tejaswini Ganta</div>
              <div class="user-dropdown-email" id="flyoutUserEmail">tejrtej9347@gmail.com</div>
            </div>
          </div>
          <div class="user-dropdown-divider"></div>
          <button class="user-dropdown-item" onclick="navigateTo('profile')">
            <i data-lucide="user"></i>
            <span>Profile & Settings</span>
          </button>
          <div class="user-dropdown-divider"></div>
          <button class="user-dropdown-item danger" onclick="handleSignOut()">
            <i data-lucide="log-out"></i>
            <span>Sign Out</span>
          </button>
        </div>

        <div class="drawer-footer-inner">
          <div class="drawer-user-info" onclick="navigateTo('profile')" style="cursor: pointer;" title="View Profile">
            <div class="user-avatar" id="drawerUserAvatar">T</div>
            <div class="drawer-user-text">
              <span class="user-email-text" id="drawerUserEmail">tejrtej9347@gmail.com</span>
              <span class="user-role-text" id="drawerUserRole">Enterprise Admin</span>
            </div>
          </div>
          <div class="drawer-user-actions" id="drawerUserActions">
            <button class="drawer-action-btn profile-action" onclick="navigateTo('profile')" title="Profile & Settings">
              <i data-lucide="user"></i>
            </button>
            <button class="drawer-action-btn signout-action" onclick="handleSignOut()" title="Sign Out">
              <i data-lucide="log-out"></i>
            </button>
          </div>
        </div>
      </div>
    </aside>

    <!-- ── MAIN CONTENT CONTAINER (RIGHT OF DRAWER) ── -->
    <div class="app-content-container">
      
      <!-- Top Breadcrumb & Status Header -->
      <header class="app-top-header" id="appTopHeader">
        <!-- Mobile hamburger -->
        <button class="mobile-menu-btn" id="mobileMenuBtn" onclick="toggleMobileDrawer()" title="Menu" aria-label="Open navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>

        <div class="breadcrumb-title" id="appBreadcrumbTitle">
          <span class="breadcrumb-dim">Workspace</span>
          <span class="breadcrumb-dim">/</span>
          <span id="breadcrumbCurrentPage">Lead Pipeline</span>
        </div>

        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <!-- Unauthenticated actions -->
          <div id="unauthHeaderActions" style="display: flex; align-items: center; gap: 0.65rem;">
            <button class="btn-primary" style="padding: 0.45rem 0.95rem; font-size: 0.82rem;" onclick="openAuthModal('signin')" title="Get Started / Sign In">
              <i data-lucide="arrow-right"></i> Get Started
            </button>
          </div>

          
          <!-- Authenticated user action pill & dropdown -->
          <div id="authHeaderUser" style="display: none; position: relative;">
            <button class="header-user-btn" id="headerUserBtn" onclick="toggleHeaderUserDropdown(event)" title="Account Menu">
              <div class="header-user-avatar" id="headerUserAvatar">S</div>
              <span class="header-user-email" id="headerUserEmail">user@example.com</span>
              <i data-lucide="chevron-down" style="width: 14px; height: 14px; opacity: 0.7;"></i>
            </button>

            <!-- Dropdown Popup -->
            <div class="user-dropdown-menu" id="headerUserDropdownMenu">
              <div class="user-dropdown-header">
                <div class="user-dropdown-avatar" id="headerMenuAvatar">S</div>
                <div class="user-dropdown-info">
                  <div class="user-dropdown-name" id="headerMenuName">SalesGenie User</div>
                  <div class="user-dropdown-email" id="headerMenuEmail">user@example.com</div>
                </div>
              </div>
              <div class="user-dropdown-divider"></div>
              <button class="user-dropdown-item" onclick="navigateTo('profile'); closeAllUserDropdowns();">
                <i data-lucide="user"></i>
                <span>Profile & Settings</span>
              </button>
              <div class="user-dropdown-divider"></div>
              <button class="user-dropdown-item danger" onclick="handleSignOut(); closeAllUserDropdowns();">
                <i data-lucide="log-out"></i>
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          <button id="headerExportBtn" class="btn-secondary" style="padding: 0.38rem 0.75rem; font-size: 0.78rem;" onclick="openExportModal()" title="Export Data">
            <i data-lucide="download"></i> <span>Export Data</span>
          </button>

          <!-- Top Right Theme Mode Pill Switcher -->
          <div class="theme-switch-pill" id="themeSwitchPill" data-active="light" onclick="toggleTheme()" title="Toggle Light / Dark Mode">
            <div class="theme-switch-btn-icon dark"><i data-lucide="moon"></i></div>
            <div class="theme-switch-btn-icon light"><i data-lucide="sun"></i></div>
            <div class="theme-switch-thumb" id="themeSwitchThumb"></div>
          </div>
        </div>
      </header>

      <!-- Main Application Views -->
      <main class="app-main">


    <!-- ──────────────────────────────────────────────────────────────────
         LANDING / WELCOME INTERFACE (FOR NEW USERS)
         ────────────────────────────────────────────────────────────────── -->
    <section id="viewLanding" class="view-tab-content">
      <div class="landing-hero-container">
        


        <h1 class="landing-main-title">
          Turn Raw Prospects into High-Velocity Pipeline with <span>Autonomous Intelligence</span>
        </h1>

        <p class="landing-subheading">
          Analyze companies in real-time, compute explainable 100-point signal scores, write hyper-personalized multi-channel sequences, and sync intelligence directly into your CRM.
        </p>

        <div class="landing-cta-cluster">
          <button class="btn-primary" onclick="loginWithRealGoogle()" style="display: flex; align-items: center; gap: 0.55rem;">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Sign in with Google</span>
          </button>
          <button class="btn-ghost" onclick="launchDemoMode()">
            <i data-lucide="play-circle"></i> <span>Explore Live Platform →</span>
          </button>
        </div>

        <!-- Live Product Preview Frame -->
        <div class="landing-preview-frame">
          <div class="landing-preview-header">
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <div class="brand-icon" style="width: 32px; height: 32px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2.5L19.5 6.8V17.2L12 21.5L4.5 17.2V6.8L12 2.5Z" stroke="#ffffff" stroke-width="1.6" fill="rgba(255, 255, 255, 0.15)"/>
                  <circle cx="12" cy="12" r="2" fill="#ffffff"/>
                </svg>
              </div>
              <div>
                <div style="font-weight: 800; font-size: 0.94rem; color: var(--text-headings);">Live Intelligence Pipeline</div>
                <div style="font-size: 0.74rem; color: var(--text-muted);">Real-Time Signal Telemetry & Scoring</div>
              </div>
            </div>
            <span class="badge badge-stage-qualified"><i data-lucide="check-circle-2" style="width: 13px; height: 13px;"></i> Live Scored</span>
          </div>

          <div style="display: grid; grid-template-columns: 280px 1fr; gap: 1.5rem; align-items: center;">
            <div class="card" style="padding: 1.1rem; border-color: #0f172a;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span style="font-weight: 800; font-size: 1rem; color: var(--text-headings);">Ramp</span>
                <span class="badge badge-stage-proposal">Hot 94/100</span>
              </div>
              <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.65rem;">Eric Glyman · CEO · Fintech</div>
              <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
                <span class="tech-pill" style="font-size: 0.72rem; padding: 0.2rem 0.5rem;"><i data-lucide="cpu"></i> FastAPI</span>
                <span class="tech-pill" style="font-size: 0.72rem; padding: 0.2rem 0.5rem;"><i data-lucide="cpu"></i> Snowflake</span>
                <span class="tech-pill" style="font-size: 0.72rem; padding: 0.2rem 0.5rem;"><i data-lucide="cpu"></i> AWS</span>
              </div>
            </div>

            <div style="background: var(--bg-card-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.15rem;">
              <div style="font-size: 0.74rem; font-weight: 700; color: #2563eb; text-transform: uppercase; margin-bottom: 0.35rem;">Generated Sequence Draft</div>
              <div style="font-weight: 700; font-size: 0.88rem; color: var(--text-headings); margin-bottom: 0.4rem;">Subject: Signal Intelligence for Ramp's Finance Pipeline</div>
              <div style="font-size: 0.82rem; color: var(--text-body); line-height: 1.5; font-weight: 500;">
                "Hi Eric, Huge fan of Ramp's rapid expansion and relentless focus on automating corporate spend velocity. Given Ramp's stack with FastAPI & Snowflake..."
              </div>
            </div>
          </div>
        </div>

        <!-- 4 Core Capabilities Grid -->
        <div class="landing-features-grid">
          <div class="landing-feature-card">
            <div class="landing-feature-icon kpi-icon-blue"><i data-lucide="target"></i></div>
            <div class="landing-feature-title">Explainable Lead Scoring</div>
            <div class="landing-feature-desc">Know precisely why an account is ready to convert with 4-factor explainable telemetry breakdowns.</div>
          </div>

          <div class="landing-feature-card">
            <div class="landing-feature-icon kpi-icon-emerald"><i data-lucide="send"></i></div>
            <div class="landing-feature-title">Hyper-Personalized Outreach</div>
            <div class="landing-feature-desc">Cold emails, LinkedIn InMail, and cold call scripts tailored to each prospect's stack.</div>
          </div>

          <div class="landing-feature-card">
            <div class="landing-feature-icon kpi-icon-amber"><i data-lucide="message-square"></i></div>
            <div class="landing-feature-title">Conversation Intelligence</div>
            <div class="landing-feature-desc">Automate call transcript summaries, sentiment scoring, and next action items extraction in seconds.</div>
          </div>

          <div class="landing-feature-card">
            <div class="landing-feature-icon kpi-icon-rose"><i data-lucide="refresh-cw"></i></div>
            <div class="landing-feature-title">Bi-Directional CRM Sync</div>
            <div class="landing-feature-desc">Native real-time integration with Salesforce, HubSpot, and Pipedrive with zero operational drag.</div>
          </div>
        </div>

        <!-- Stats Banner -->
        <div class="landing-stats-banner">
          <div class="landing-stat-item">
            <span class="landing-stat-number">4.2x</span>
            <span class="landing-stat-label">Higher SDR Reply Rates</span>
          </div>
          <div class="landing-stat-item">
            <span class="landing-stat-number">99.4%</span>
            <span class="landing-stat-label">Signal Scoring Accuracy</span>
          </div>
          <div class="landing-stat-item">
            <span class="landing-stat-number">&lt; 100ms</span>
            <span class="landing-stat-label">Real-Time Telemetry Latency</span>
          </div>
          <div class="landing-stat-item">
            <span class="landing-stat-number">100%</span>
            <span class="landing-stat-label">Automated CRM Sync</span>
          </div>
        </div>

      </div>
    </section>

    <!-- ──────────────────────────────────────────────────────────────────
         TAB 1: LEADS & PIPELINE VIEW
         ────────────────────────────────────────────────────────────────── -->
    <section id="viewLeads" class="view-tab-content active">
      <div class="leads-layout">
        <div class="leads-sidebar">
          <div class="leads-sidebar-header">
            <div class="leads-sidebar-title">
              <i data-lucide="crosshair"></i>
              Lead Pipeline <span class="badge" style="background: var(--bg-pill); font-size: 0.72rem; color: var(--text-headings);" id="leadsCountBadge">8</span>
            </div>
            <button class="btn-primary" style="padding: 0.38rem 0.8rem; font-size: 0.78rem;" onclick="openAddLeadModal()">
              <i data-lucide="plus"></i> Add Lead
            </button>
          </div>

          <div class="pipeline-summary-bar">
            <span>PIPELINE VALUE</span>
            <span class="pipeline-summary-val" id="leadSidebarPipelineTotal">$2.04M ARR</span>
          </div>



          <div class="filter-sort-row">
            <select id="leadStageFilter" class="select-mini" onchange="handleLeadSearch()">
              <option value="all">All Stages</option>
              <option value="New">New</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal">Proposal</option>
              <option value="Negotiation">Negotiation</option>
              <option value="Closed Won">Closed Won</option>
            </select>
            <select id="leadSortSelect" class="select-mini" onchange="handleLeadSearch()">
              <option value="score-desc">Score: High → Low</option>
              <option value="score-asc">Score: Low → High</option>
              <option value="name-asc">Company: A → Z</option>
            </select>
          </div>

          <div class="search-input-wrap">
            <i data-lucide="search"></i>
            <input type="text" id="leadSearchInput" class="search-input" placeholder="Search by company, contact, stack..." oninput="handleLeadSearch()" />
          </div>

          <div class="leads-list" id="leadsListContainer">
            <!-- Populated dynamically -->
          </div>
        </div>

        <div class="leads-detail-panel" id="leadDetailContainer">
          <!-- Populated by renderLeadDetail -->
        </div>
      </div>
    </section>

    <!-- ──────────────────────────────────────────────────────────────────
         TAB 2: OUTREACH GENERATOR VIEW
         ────────────────────────────────────────────────────────────────── -->
    <section     <!-- ──────────────────────────────────────────────────────────────────
         TAB 1.5: BUYING INTENT & SIGNAL RADAR
         ────────────────────────────────────────────────────────────────── -->
    <section id="viewRadar" class="view-tab-content">
      <!-- Radar Live Telemetry Banner -->
      <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(15, 23, 42, 0.03) 100%); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem 1.75rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.25rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.4rem;">
            <span style="display: inline-flex; width: 10px; height: 10px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 10px #22c55e; animation: pulse 2s infinite;"></span>
            <span style="font-size: 0.76rem; font-weight: 800; color: #2563eb; text-transform: uppercase; letter-spacing: 0.06em;">Real-Time Buying Intent Radar</span>
          </div>
          <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--text-headings); margin-bottom: 0.35rem;">Live Prospecting Signal Stream</h2>
          <p style="font-size: 0.85rem; color: var(--text-muted); max-width: 620px;">
            AI monitors 420,000+ public signals daily (funding, job openings, tech stack migrations, and leadership changes) to surface ready-to-buy accounts before competitors.
          </p>
        </div>

        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <div style="text-align: right;">
            <div style="font-size: 1.35rem; font-weight: 800; color: #2563eb;" id="radarTotalSignals">14 Active</div>
            <div style="font-size: 0.74rem; color: var(--text-dim); font-weight: 600;">High-Intent Detected Today</div>
          </div>
          <button class="btn-primary" onclick="batchImportHighIntent()" style="padding: 0.55rem 1.05rem; font-size: 0.84rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>Import All High-Intent (4)</span>
          </button>
        </div>
      </div>

      <!-- Radar Filter Toolbar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;">
        <div style="display: flex; gap: 0.45rem; flex-wrap: wrap;" id="radarFilterCluster">
          <button class="filter-pill active" onclick="filterRadarSignals('all', this)"><i data-lucide="layers"></i> All Signals</button>
          <button class="filter-pill" onclick="filterRadarSignals('funding', this)"><i data-lucide="dollar-sign"></i> Funding Rounds</button>
          <button class="filter-pill" onclick="filterRadarSignals('hiring', this)"><i data-lucide="users"></i> Hiring Spikes</button>
          <button class="filter-pill" onclick="filterRadarSignals('tech', this)"><i data-lucide="cpu"></i> Tech Stack Migrations</button>
          <button class="filter-pill" onclick="filterRadarSignals('executive', this)"><i data-lucide="briefcase"></i> Executive Hires</button>
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem;">
          <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">Min Signal Score:</span>
          <select id="radarScoreThreshold" onchange="renderRadarView()" style="padding: 0.35rem 0.65rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-headings); font-size: 0.8rem; font-weight: 600;">
            <option value="0">All Scores (0+)</option>
            <option value="80" selected>High Intent (80+)</option>
            <option value="90">Very High / Hot (90+)</option>
          </select>
        </div>
      </div>

      <!-- Live Radar Stream Grid -->
      <div id="radarStreamContainer" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 1.25rem;">
        <!-- Dynamically Rendered by renderRadarView() -->
      </div>
    </section>

    <!-- ──────────────────────────────────────────────────────────────────
         TAB 2: OUTREACH COPY GENERATOR
         ────────────────────────────────────────────────────────────────── -->
    <section id="viewOutreach" class="view-tab-content">

      <!-- ── Advanced AOG Banner with Channel Switcher ── -->
      <div class="aog-banner">
        <div class="aog-banner-left">
          <div class="aog-banner-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2L9.09 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77L18.18 21.02L17 14.14L22 9.27L14.91 8.26L12 2Z" fill="#3b82f6"/></svg>
          </div>
          <div>
            <div class="aog-banner-title">
              Autonomous AI Outreach Suite
              <span class="aog-badge-live"><span class="aog-pulse-dot"></span> ACTIVE</span>
            </div>
            <div class="aog-banner-subtitle">Generate high-converting multi-channel copy, live spam audits & call battlecards</div>
          </div>
        </div>

        <!-- Channel Pills -->
        <div class="aog-channel-pills">
          <button class="aog-chan-btn active" id="chanEmail" onclick="aogSwitchChannel('email')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Cold Email
          </button>
          <button class="aog-chan-btn" id="chanLinkedin" onclick="aogSwitchChannel('linkedin')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn InMail
          </button>
          <button class="aog-chan-btn" id="chanPhone" onclick="aogSwitchChannel('phone')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Script & Objections
          </button>
        </div>

        <div class="aog-banner-right">
          <span class="aog-selected-badge" id="aogSelectedBadge">Select a Lead</span>
          <button class="aog-generate-btn" id="aogGenerateBtn" onclick="aogGenerateEmail()">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.09 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77L18.18 21.02L17 14.14L22 9.27L14.91 8.26L12 2Z"/></svg>
            Generate AI Pitch
          </button>
        </div>
      </div>

      <!-- ── AOG 4-Column Grid ── -->
      <div class="aog-grid">

        <!-- ── COL 1: Select Lead ── -->
        <div class="aog-panel">
          <div class="aog-panel-header">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span>Target Prospect</span>
          </div>
          <!-- Search input -->
          <div class="aog-search-wrap">
            <input type="text" id="aogLeadSearchInput" class="aog-search-input" placeholder="Search accounts or contacts..." oninput="aogFilterLeads(this.value)" />
          </div>
          <div class="aog-lead-list" id="aogLeadList"></div>
        </div>

        <!-- ── COL 2: AI Pitch & Outreach Studio ── -->
        <div class="aog-panel aog-panel-email">

          <!-- Deliverability & Audit Telemetry Strip -->
          <div class="aog-deliverability-strip">
            <div class="aog-deliv-item">
              <span class="aog-deliv-dot green"></span>
              <span class="aog-deliv-label">Inbox Health:</span>
              <strong id="aogDelivScore">99% Optimal</strong>
            </div>
            <div class="aog-deliv-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span id="aogReadTime">38s read</span>
            </div>
            <div class="aog-deliv-item">
              <span id="aogWordCount">92 words</span>
            </div>
            <div class="aog-deliv-item">
              <span class="aog-deliv-spam" id="aogSpamCheck">0 Spam Triggers</span>
            </div>
          </div>

          <!-- Subject & A/B Variation Row -->
          <div class="aog-field-group" id="aogSubjectGroup">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <label class="aog-field-label">Subject Line</label>
              <div class="aog-ab-pills">
                <button class="aog-ab-btn active" id="abVarA" onclick="aogSwitchAbVariant('A')">Var A (Trigger)</button>
                <button class="aog-ab-btn" id="abVarB" onclick="aogSwitchAbVariant('B')">Var B (ROI Question)</button>
              </div>
            </div>
            <input type="text" id="aogSubjectInput" class="aog-input" placeholder="AI-generated high open-rate subject line..." oninput="aogUpdateAudit()" />
          </div>

          <!-- Body Textarea -->
          <div class="aog-field-group aog-field-grow">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <label class="aog-field-label" id="aogBodyLabel">Pitch Message Body</label>
              <div class="aog-draft-meta" style="padding:0;">
                <span class="aog-draft-badge" id="aogDraftBadge">Draft</span>
                <span class="aog-draft-date" id="aogDraftDate"></span>
                <button class="aog-copy-btn" onclick="aogCopyEmail()" title="Copy to clipboard">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  Copy
                </button>
              </div>
            </div>
            <textarea id="aogBodyTextarea" class="aog-textarea" placeholder="Select a lead and click Generate AI Pitch to create tailored sequence..." oninput="aogUpdateAudit()"></textarea>
          </div>

          <!-- Phone Call Battlecards Container (Shown when channel is 'phone') -->
          <div id="aogPhoneBattlecards" class="aog-battlecard-container" style="display:none;">
            <div class="aog-battlecard-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>LIVE OBJECTION BATTLECARDS & REBUTTALS</span>
            </div>
            <div class="aog-battlecards-grid">
              <div class="aog-battlecard" onclick="aogInsertRebuttal('no_budget')">
                <div class="aog-battlecard-title">"We have no budget right now"</div>
                <div class="aog-battlecard-preview">"Completely understand. Most of our clients didn't have budget allocated either until they saw how we reduce tool spend by 30%..."</div>
                <span class="aog-battlecard-tag">Click to Use</span>
              </div>
              <div class="aog-battlecard" onclick="aogInsertRebuttal('competitor')">
                <div class="aog-battlecard-title">"We already use a competitor"</div>
                <div class="aog-battlecard-preview">"Glad you have that covered! We actually integrate directly alongside them to fill signal blind spots in real-time..."</div>
                <span class="aog-battlecard-tag">Click to Use</span>
              </div>
              <div class="aog-battlecard" onclick="aogInsertRebuttal('send_email')">
                <div class="aog-battlecard-title">"Just send me an email"</div>
                <div class="aog-battlecard-preview">"Will do right now! So I don't send you generic fluff, what is your top focus this quarter around pipeline automation?"</div>
                <span class="aog-battlecard-tag">Click to Use</span>
              </div>
            </div>
          </div>

          <!-- AI Strategic Summary Panel -->
          <div id="aogAiSummaryPanel" class="aog-ai-summary" style="display:none;">
            <div class="aog-ai-summary-header">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#6366f1"><path d="M12 2L9.09 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77L18.18 21.02L17 14.14L22 9.27L14.91 8.26L12 2Z"/></svg>
              <span>AI Strategic Intent & Pain Point Summary</span>
              <span id="aogSummarySpinner" style="display:none; font-size:0.75rem; color:var(--text-muted); font-style:italic;">Generating intelligence...</span>
            </div>
            <div id="aogSummaryContent" class="aog-ai-summary-body"></div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="aog-actions">
            <button class="aog-save-btn" onclick="aogSaveDraft()">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              Save Draft
            </button>
            <button class="aog-send-btn" id="aogSendBtn" onclick="aogSendEmail()">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send & Sync CRM
            </button>
          </div>
        </div>

        <!-- ── COL 3: Lead Score & ICP Fit ── -->
        <div class="aog-panel">
          <div class="aog-panel-header">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span>Lead Score & Match</span>
            <button class="aog-rescore-btn" onclick="aogRescore()">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9.09 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77L18.18 21.02L17 14.14L22 9.27L14.91 8.26L12 2Z"/></svg>
              Re-score
            </button>
          </div>

          <div class="aog-gauge-wrap">
            <div class="aog-gauge-ring-wrap">
              <svg class="aog-gauge-svg" viewBox="0 0 140 140">
                <circle class="aog-gauge-track" cx="70" cy="70" r="54"/>
                <circle class="aog-gauge-fill" id="aogGaugeFill" cx="70" cy="70" r="54"/>
              </svg>
              <div class="aog-gauge-center">
                <span class="aog-gauge-num" id="aogGaugeNum">—</span>
                <span class="aog-gauge-sub">Signal Score</span>
                <span class="aog-gauge-conv" id="aogGaugeConv">—</span>
              </div>
            </div>
            <span class="aog-qualification-badge" id="aogQualBadge">Not Scored</span>
          </div>

          <div class="aog-score-factors" id="aogScoreFactors">
            <div class="aog-score-empty">Select a lead to view scoring factors</div>
          </div>
        </div>

        <!-- ── COL 4: Outreach Strategy & Signals ── -->
        <div class="aog-panel">
          <div class="aog-panel-header">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            <span>Strategic Journey</span>
          </div>

          <div class="aog-strategy-cards">
            <div class="aog-strategy-card">
              <div class="aog-strategy-card-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <div>
                <div class="aog-strategy-card-label">Optimal Timing</div>
                <div class="aog-strategy-card-value" id="aogStratTiming">Tuesday 10:00 AM (Peak Open)</div>
              </div>
            </div>
            <div class="aog-strategy-card">
              <div class="aog-strategy-card-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
              <div>
                <div class="aog-strategy-card-label">Recommended Path</div>
                <div class="aog-strategy-card-value" id="aogStratChannel">Email &#8594; LinkedIn &#8594; Call</div>
              </div>
            </div>
            <div class="aog-strategy-card">
              <div class="aog-strategy-card-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
              <div>
                <div class="aog-strategy-card-label">Deal Velocity</div>
                <div class="aog-strategy-card-value" id="aogStratPriority">High Priority</div>
              </div>
            </div>
          </div>

          <div class="aog-key-signals-header">ACTIVE BUYING TRIGGERS</div>
          <div class="aog-key-signals-list" id="aogKeySignals">
            <div class="aog-score-empty">Select a lead to view triggers</div>
          </div>
        </div>

      </div>

      <!-- ── Sent Emails & CRM Sync Log ── -->
      <div class="aog-sent-section">
        <div class="aog-sent-header">
          <div class="aog-sent-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Outreach Activity & CRM Pipeline Stream
          </div>
          <span class="aog-sent-count" id="aogSentCount">0</span>
        </div>
        <div class="aog-sent-list" id="aogSentList">
          <div class="aog-sent-empty">No sequence emails sent yet. Generate and launch your first pitch above.</div>
        </div>
      </div>

    </section>

    <!-- ──────────────────────────────────────────────────────────────────
         TAB 3: CONVERSATION INTELLIGENCE VIEW
         ────────────────────────────────────────────────────────────────── -->
    <section id="viewConversations" class="view-tab-content">
      <div class="card outreach-header-bar">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <div class="brand-icon" style="width: 38px; height: 38px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.5L19.5 6.8V17.2L12 21.5L4.5 17.2V6.8L12 2.5Z" stroke="#ffffff" stroke-width="1.6" stroke-linejoin="round" fill="rgba(255, 255, 255, 0.08)"/>
              <path d="M12 7.2L16.2 9.6V14.4L12 16.8L7.8 14.4V9.6L12 7.2Z" fill="#ffffff" stroke="#60a5fa" stroke-width="1.2"/>
              <circle cx="12" cy="12" r="1.6" fill="#0f172a"/>
            </svg>
          </div>
          <div>
            <div style="font-family: var(--font-heading); font-weight: 800; font-size: 1.05rem; color: var(--text-headings);">Conversation Intelligence & Summaries</div>
            <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 500;">Transcript ingestion, action item extraction, sentiment scoring, and CRM sync</div>
          </div>
        </div>
        <div style="display: flex; gap: 0.75rem;">
          <button class="btn-secondary" onclick="openLogInteractionModal()"><i data-lucide="plus"></i> Log Interaction</button>
          <button class="btn-primary" onclick="syncLeadToCRM()"><i data-lucide="refresh-cw"></i> Sync to Salesforce</button>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 320px 1fr 320px; gap: 1.25rem;">
        <!-- Left: Prospect Selection & Timeline -->
        <div class="card">
          <div class="form-group" style="margin-bottom: 1rem;">
            <label class="form-label">Select Prospect Account</label>
            <select id="conversationLeadSelect" class="form-input" onchange="handleConversationLeadChange(this.value)">
              <!-- Populated dynamically -->
            </select>
          </div>
          <div style="font-weight: 700; font-size: 0.84rem; color: var(--text-headings); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.45rem;">
            <i data-lucide="history" style="width: 15px; height: 15px; color: #2563eb;"></i> CRM Activity History
          </div>
          <div class="timeline-list" id="convSyncTimeline">
            <!-- Populated dynamically -->
          </div>
        </div>

        <!-- Center: Meeting Summary & Action Items -->
        <div class="card" style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span style="font-size: 0.74rem; font-weight: 700; color: #2563eb; text-transform: uppercase;">LATEST MEETING SUMMARY</span>
              <h3 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 800; color: var(--text-headings); margin-top: 2px;" id="convMeetingCompany">Ramp</h3>
            </div>
            <span class="badge badge-stage-qualified" id="convSentimentBadge"><i data-lucide="smile" style="width: 14px; height: 14px;"></i> Positive (92%)</span>
          </div>

          <div class="ai-summary-box" id="convAiSummaryText" style="background: var(--bg-card-subtle); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1rem; font-size: 0.88rem; line-height: 1.6; color: var(--text-body); font-weight: 500;">
            Product sync with Eric Glyman covering corporate finance velocity. The prospect validated the demand for automated spend signal extraction and agreed to review an integration roadmap for Snowflake and FastAPI workflows.
          </div>

          <div>
            <div style="font-weight: 700; font-size: 0.86rem; color: var(--text-headings); margin-bottom: 0.65rem; display: flex; align-items: center; gap: 0.45rem;">
              <i data-lucide="check-square" style="width: 15px; height: 15px; color: #2563eb;"></i> Extracted Action Items
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;" id="convActionItemsList">
              <label style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.84rem; color: var(--text-body); cursor: pointer; font-weight: 500;">
                <input type="checkbox" checked onchange="toggleActionItem(this)" style="accent-color: #0f172a;" />
                <span>Send 1-page financial transcode compute ROI benchmark</span>
              </label>
              <label style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.84rem; color: var(--text-body); cursor: pointer; font-weight: 500;">
                <input type="checkbox" onchange="toggleActionItem(this)" style="accent-color: #0f172a;" />
                <span>Schedule 15-minute technical demo with engineering lead</span>
              </label>
              <label style="display: flex; align-items: center; gap: 0.65rem; font-size: 0.84rem; color: var(--text-body); cursor: pointer; font-weight: 500;">
                <input type="checkbox" onchange="toggleActionItem(this)" style="accent-color: #0f172a;" />
                <span>Update Salesforce Opportunity stage to Proposal Sent</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Right: Meeting Metadata -->
        <div class="card" style="display: flex; flex-direction: column; gap: 0.85rem;">
          <div style="font-weight: 700; font-size: 0.88rem; color: var(--text-headings); display: flex; align-items: center; gap: 0.45rem;">
            <i data-lucide="info" style="width: 15px; height: 15px; color: #2563eb;"></i> Meeting Profile
          </div>
          <div class="info-stat-card">
            <span class="info-stat-label">Contact</span>
            <span class="info-stat-value" id="convMeetingContact">Eric Glyman (CEO)</span>
          </div>
          <div class="info-stat-card">
            <span class="info-stat-label">Duration</span>
            <span class="info-stat-value">30 Minutes</span>
          </div>
          <div class="info-stat-card">
            <span class="info-stat-label">Audio Quality</span>
            <span class="info-stat-value" style="color: #059669;">HD 48kHz (Clean)</span>
          </div>
          <div class="info-stat-card">
            <span class="info-stat-label">Next Step</span>
            <span class="info-stat-value">Tuesday 10:00 AM Sync</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ──────────────────────────────────────────────────────────────────
         TAB 4: DASHBOARD ANALYTICS VIEW
         ────────────────────────────────────────────────────────────────── -->
    <section id="viewDashboard" class="view-tab-content">
      <div class="dashboard-top-bar">
        <div>
          <h2 style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800; color: var(--text-headings); display: flex; align-items: center; gap: 0.55rem;">
            <span>Pipeline Intelligence & Revenue Velocity</span>
            <span style="font-size: 0.68rem; font-weight: 800; background: rgba(37,99,235,0.1); color: #2563eb; border: 1px solid rgba(37,99,235,0.2); padding: 2px 7px; border-radius: 4px;">LIVE TELEMETRY</span>
          </h2>
          <div style="font-size: 0.82rem; color: var(--text-muted); font-weight: 500;">Real-time revenue telemetry, signal attribution, and conversion performance</div>
        </div>
        <div style="display: flex; gap: 0.75rem; align-items: center;">
          <div class="dash-timeframe-pills">
            <button class="dash-tf-btn" id="dashTf7d" onclick="dashSetTimeframe('7d')">7D</button>
            <button class="dash-tf-btn active" id="dashTf30d" onclick="dashSetTimeframe('30d')">30D</button>
            <button class="dash-tf-btn" id="dashTf90d" onclick="dashSetTimeframe('90d')">90D</button>
            <button class="dash-tf-btn" id="dashTfYtd" onclick="dashSetTimeframe('ytd')">YTD</button>
          </div>
          <button class="btn-primary" onclick="openExportModal()" style="padding: 0.45rem 0.95rem; font-size: 0.82rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export Report
          </button>
        </div>
      </div>

      <!-- 4 KPI Metrics Banner -->
      <div class="dashboard-kpi-grid">
        <div class="kpi-card" onclick="navigateTo('leads')">
          <div class="kpi-icon-box kpi-icon-blue"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
          <div class="kpi-value" id="kpiTotalLeads">117</div>
          <div class="kpi-title">Total Active Pipeline</div>
          <div class="kpi-subtitle" id="kpiQualifiedSub"><span style="color:#16a34a; font-weight:700;">↑ 14.8%</span> vs last period</div>
        </div>

        <div class="kpi-card" onclick="showToast('Pipeline Value: $2,420,000 across active negotiations')">
          <div class="kpi-icon-box kpi-icon-emerald"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          <div class="kpi-value" id="kpiPipelineVal">$2.42M</div>
          <div class="kpi-title">Weighted Pipeline ARR</div>
          <div class="kpi-subtitle"><span style="color:#16a34a; font-weight:700;">↑ $380K</span> this month</div>
        </div>

        <div class="kpi-card" onclick="showToast('Autonomous Signal Engine response time: 2.4 hours')">
          <div class="kpi-icon-box kpi-icon-amber"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
          <div class="kpi-value" id="kpiAvgResp">28.4%</div>
          <div class="kpi-title">Win Rate Velocity</div>
          <div class="kpi-subtitle"><span style="color:#16a34a; font-weight:700;">↑ 4.2%</span> vs peer benchmark</div>
        </div>

        <div class="kpi-card" onclick="navigateTo('leads')">
          <div class="kpi-icon-box kpi-icon-rose"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg></div>
          <div class="kpi-value" id="kpiClosedWon">$840K</div>
          <div class="kpi-title">Closed Won ARR</div>
          <div class="kpi-subtitle"><span style="color:#16a34a; font-weight:700;">8 Enterprise</span> deals won</div>
        </div>
      </div>

      <!-- ── PRIMARY CHART ROW: Revenue Velocity Area Graph & Pipeline Donut ── -->
      <div class="dash-charts-main-grid">
        
        <!-- 1. Interactive Revenue Velocity Graph -->
        <div class="dash-chart-card">
          <div class="dash-chart-header">
            <div class="dash-chart-header-left">
              <div class="dash-chart-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                Revenue Velocity & Pipeline Growth
              </div>
              <div class="dash-chart-subtitle">Real-time pipeline progression ($k) and deal milestone velocity</div>
            </div>
            <div class="dash-metric-pills">
              <button class="dash-metric-btn active" id="btnMetricPipeline" onclick="dashSetMetric('pipeline')">Pipeline ARR</button>
              <button class="dash-metric-btn" id="btnMetricDeals" onclick="dashSetMetric('deals')">Deals Won</button>
              <button class="dash-metric-btn" id="btnMetricVelocity" onclick="dashSetMetric('velocity')">Deal Velocity</button>
            </div>
          </div>

          <!-- SVG Interactive Area Chart Container -->
          <div class="dash-graph-wrapper" id="dashAreaGraphWrapper">
            <svg class="dash-svg-canvas" id="dashAreaSvg" viewBox="0 0 700 240" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGradientBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.38"/>
                  <stop offset="85%" stop-color="#3b82f6" stop-opacity="0.02"/>
                  <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0"/>
                </linearGradient>
                <linearGradient id="lineGradientBlue" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#60a5fa"/>
                  <stop offset="50%" stop-color="#3b82f6"/>
                  <stop offset="100%" stop-color="#1d4ed8"/>
                </linearGradient>
              </defs>
              <!-- Grid Lines -->
              <line x1="40" y1="30" x2="680" y2="30" class="dash-grid-line"/>
              <line x1="40" y1="80" x2="680" y2="80" class="dash-grid-line"/>
              <line x1="40" y1="130" x2="680" y2="130" class="dash-grid-line"/>
              <line x1="40" y1="180" x2="680" y2="180" class="dash-grid-line"/>
              <line x1="40" y1="210" x2="680" y2="210" class="dash-grid-base"/>

              <!-- Y Axis Labels -->
              <text x="32" y="34" class="dash-axis-label" id="yLabel4">$3.0M</text>
              <text x="32" y="84" class="dash-axis-label" id="yLabel3">$2.2M</text>
              <text x="32" y="134" class="dash-axis-label" id="yLabel2">$1.5M</text>
              <text x="32" y="184" class="dash-axis-label" id="yLabel1">$750k</text>

              <!-- Filled Area Path -->
              <path id="dashAreaPath" class="dash-area-fill" fill="url(#areaGradientBlue)" d=""/>

              <!-- Glowing Stroke Path -->
              <path id="dashLinePath" class="dash-line-stroke" stroke="url(#lineGradientBlue)" stroke-width="3.2" fill="none" d=""/>

              <!-- Interactive Data Points & Markers -->
              <g id="dashDataPoints"></g>
            </svg>
            <!-- Dynamic Hover Tooltip -->
            <div id="dashChartTooltip" class="dash-chart-tooltip" style="display:none;"></div>
          </div>

          <!-- X Axis Dates -->
          <div class="dash-xaxis-labels" id="dashXAxisLabels"></div>
        </div>

        <!-- 2. Pipeline Stage Distribution & Donut Graph -->
        <div class="dash-chart-card">
          <div class="dash-chart-header">
            <div class="dash-chart-header-left">
              <div class="dash-chart-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
                Pipeline Stage Allocation
              </div>
              <div class="dash-chart-subtitle">ARR breakdown by deal progression</div>
            </div>
          </div>

          <!-- Donut Graphic & Legend -->
          <div class="dash-donut-container">
            <div class="dash-donut-wrap">
              <svg class="dash-donut-svg" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="62" class="donut-bg"/>
                <circle cx="80" cy="80" r="62" class="donut-seg seg-negotiation" stroke-dasharray="390" stroke-dashoffset="140"/>
                <circle cx="80" cy="80" r="62" class="donut-seg seg-proposal" stroke-dasharray="390" stroke-dashoffset="245"/>
                <circle cx="80" cy="80" r="62" class="donut-seg seg-qualified" stroke-dasharray="390" stroke-dashoffset="315"/>
                <circle cx="80" cy="80" r="62" class="donut-seg seg-discovery" stroke-dasharray="390" stroke-dashoffset="365"/>
              </svg>
              <div class="donut-center-text">
                <span class="donut-center-val">$2.42M</span>
                <span class="donut-center-label">Active ARR</span>
              </div>
            </div>

            <!-- Legend breakdown -->
            <div class="dash-donut-legend">
              <div class="donut-legend-item" onclick="filterLeadsByStage('Negotiation')">
                <span class="legend-color-dot" style="background:#f59e0b;"></span>
                <div class="legend-info">
                  <div class="legend-title">Negotiation</div>
                  <div class="legend-val">$1.05M · 43%</div>
                </div>
              </div>
              <div class="donut-legend-item" onclick="filterLeadsByStage('Proposal')">
                <span class="legend-color-dot" style="background:#2563eb;"></span>
                <div class="legend-info">
                  <div class="legend-title">Proposal</div>
                  <div class="legend-val">$680K · 28%</div>
                </div>
              </div>
              <div class="donut-legend-item" onclick="filterLeadsByStage('Qualified')">
                <span class="legend-color-dot" style="background:#10b981;"></span>
                <div class="legend-info">
                  <div class="legend-title">Qualified Match</div>
                  <div class="legend-val">$460K · 19%</div>
                </div>
              </div>
              <div class="donut-legend-item" onclick="filterLeadsByStage('New')">
                <span class="legend-color-dot" style="background:#64748b;"></span>
                <div class="legend-info">
                  <div class="legend-title">Discovery / New</div>
                  <div class="legend-val">$230K · 10%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── SECONDARY ROW: Signal Performance Bar Chart & Funnel Throughput ── -->
      <div class="dash-charts-secondary-grid">
        
        <!-- 3. Buying Signal Conversion Performance (Bar Graph) -->
        <div class="dash-chart-card">
          <div class="dash-chart-header">
            <div class="dash-chart-header-left">
              <div class="dash-chart-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
                Signal Attribution & Conversion Velocity
              </div>
              <div class="dash-chart-subtitle">Win rates & response speed indexed by trigger category</div>
            </div>
          </div>

          <div class="dash-bars-container" id="dashSignalBarsContainer">
            <!-- Rendered dynamically -->
          </div>
        </div>

        <!-- 4. Autonomous Intelligence Conversion Funnel -->
        <div class="dash-chart-card">
          <div class="dash-chart-header">
            <div class="dash-chart-header-left">
              <div class="dash-chart-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                Autonomous Prospect-to-Close Funnel
              </div>
              <div class="dash-chart-subtitle">Pipeline velocity & throughput conversion rates</div>
            </div>
          </div>

          <div class="dash-funnel-container">
            <div class="funnel-step">
              <div class="funnel-step-header">
                <span class="funnel-step-name">1. Intent Triggers Monitored</span>
                <span class="funnel-step-val">1,420 Signals</span>
              </div>
              <div class="funnel-bar-bg"><div class="funnel-bar-fill" style="width: 100%; background: #3b82f6;"></div></div>
            </div>
            <div class="funnel-step">
              <div class="funnel-step-header">
                <span class="funnel-step-name">2. Accounts Scored (≥ 75 PTS)</span>
                <span class="funnel-step-val">640 Leads (45.1%)</span>
              </div>
              <div class="funnel-bar-bg"><div class="funnel-bar-fill" style="width: 72%; background: #6366f1;"></div></div>
            </div>
            <div class="funnel-step">
              <div class="funnel-step-header">
                <span class="funnel-step-name">3. AI Outreach Touches Dispatched</span>
                <span class="funnel-step-val">312 Touches (48.7%)</span>
              </div>
              <div class="funnel-bar-bg"><div class="funnel-bar-fill" style="width: 52%; background: #8b5cf6;"></div></div>
            </div>
            <div class="funnel-step">
              <div class="funnel-step-header">
                <span class="funnel-step-name">4. Executive Demos & Discovery Booked</span>
                <span class="funnel-step-val">88 Meetings (28.2%)</span>
              </div>
              <div class="funnel-bar-bg"><div class="funnel-bar-fill" style="width: 34%; background: #f59e0b;"></div></div>
            </div>
            <div class="funnel-step">
              <div class="funnel-step-header">
                <span class="funnel-step-name">5. Closed Won Contracts</span>
                <span class="funnel-step-val">32 Deals ($840K ARR)</span>
              </div>
              <div class="funnel-bar-bg"><div class="funnel-bar-fill" style="width: 22%; background: #10b981;"></div></div>
            </div>
          </div>
        </div>
      </div>

      <!-- TOP LEADS TABLE -->
      <div class="top-leads-table-container">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.15rem;">
          <div style="font-family: var(--font-heading); font-weight: 800; font-size: 1.05rem; color: var(--text-headings); display: flex; align-items: center; gap: 0.55rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            <span>Top Pipeline Opportunities by Signal Score</span>
          </div>
          <button class="btn-ghost" onclick="navigateTo('leads')" style="font-size: 0.78rem; padding: 0.3rem 0.75rem;">
            View All Leads <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 4px;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

        <div style="overflow-x: auto;">
          <table class="top-leads-table">
            <thead>
              <tr>
                <th>COMPANY</th>
                <th>CONTACT</th>
                <th>INDUSTRY</th>
                <th>STATUS</th>
                <th style="text-align: right;">SIGNAL SCORE</th>
              </tr>
            </thead>
            <tbody id="dashboardTopLeadsTableBody">
              <!-- Rendered dynamically -->
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ──────────────────────────────────────────────────────────────────
         TAB 5: CRM SYNC & INTEGRATIONS VIEW
         ────────────────────────────────────────────────────────────────── -->
    <section id="viewCrm" class="view-tab-content">
      <div class="card outreach-header-bar">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <div class="brand-icon" style="width: 38px; height: 38px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.5L19.5 6.8V17.2L12 21.5L4.5 17.2V6.8L12 2.5Z" stroke="#ffffff" stroke-width="1.6" stroke-linejoin="round" fill="rgba(255, 255, 255, 0.08)"/>
              <path d="M12 7.2L16.2 9.6V14.4L12 16.8L7.8 14.4V9.6L12 7.2Z" fill="#ffffff" stroke="#60a5fa" stroke-width="1.2"/>
              <circle cx="12" cy="12" r="1.6" fill="#0f172a"/>
            </svg>
          </div>
          <div>
            <div style="font-family: var(--font-heading); font-weight: 800; font-size: 1.05rem; color: var(--text-headings);">CRM Bi-Directional Synchronization</div>
            <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 500;">Real-time bi-directional pipeline sync with Salesforce, HubSpot, and Pipedrive</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <select id="crmProviderSelector" class="select-dropdown" style="padding: 0.45rem 0.85rem; font-size: 0.82rem;" onchange="handleCRMProviderChange(this.value)">
            <option value="Salesforce">Salesforce Enterprise</option>
            <option value="HubSpot">HubSpot CRM</option>
            <option value="Pipedrive">Pipedrive</option>
            <option value="Zoho">Zoho CRM</option>
          </select>
          <button class="btn-primary" onclick="triggerGlobalCRMSync()">
            <i data-lucide="refresh-cw"></i> Sync All Records
          </button>
        </div>
      </div>

      <div class="sync-stats-grid">
        <div class="sync-stat-card">
          <div class="sync-stat-icon kpi-icon-blue"><i data-lucide="database"></i></div>
          <div>
            <span class="sync-stat-num" id="crmTotalSyncs">117</span>
            <span class="sync-stat-label">Total Syncs</span>
          </div>
        </div>
        <div class="sync-stat-card">
          <div class="sync-stat-icon kpi-icon-emerald"><i data-lucide="check"></i></div>
          <div>
            <span class="sync-stat-num" id="crmSyncedCount">117</span>
            <span class="sync-stat-label">Synced</span>
          </div>
        </div>
        <div class="sync-stat-card">
          <div class="sync-stat-icon kpi-icon-amber"><i data-lucide="clock"></i></div>
          <div>
            <span class="sync-stat-num" id="crmPendingCount">0</span>
            <span class="sync-stat-label">Pending</span>
          </div>
        </div>
        <div class="sync-stat-card">
          <div class="sync-stat-icon kpi-icon-rose"><i data-lucide="x"></i></div>
          <div>
            <span class="sync-stat-num" id="crmFailedCount">0</span>
            <span class="sync-stat-label">Failed</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <div style="font-weight: 700; font-size: 0.92rem; display: flex; align-items: center; gap: 0.45rem;">
            <i data-lucide="rotate-cw" style="width: 16px; height: 16px; color: #2563eb;"></i> Sync Activity Log
          </div>
          <select id="crmStatusFilter" class="select-dropdown" style="padding: 0.35rem 0.75rem; font-size: 0.78rem;" onchange="handleCrmFilterChange(this.value)">
            <option value="all">All Status</option>
            <option value="Synced">Synced</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div class="sync-activity-list" id="crmSyncLogContainer">
          <!-- Populated dynamically -->
        </div>
      </div>
    </section>

    <!-- ──────────────────────────────────────────────────────────────────
         TAB: PROFILE & WORKSPACE SETTINGS
         ────────────────────────────────────────────────────────────────── -->
    <section id="viewProfile" class="view-tab-content">
      <div style="max-width: 860px; margin: 0 auto;">

        <!-- Header Banner -->
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 60%, #1e1b4b 100%); border-radius: var(--radius-lg); padding: 2.5rem 2rem 2rem; margin-bottom: 1.75rem; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 80% 50%, rgba(99,102,241,0.18) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(37,99,235,0.12) 0%, transparent 50%); pointer-events: none;"></div>
          <div style="display: flex; align-items: center; gap: 1.75rem; position: relative; z-index: 1; flex-wrap: wrap;">
            <!-- Avatar -->
            <div style="position: relative; flex-shrink: 0;">
              <div id="profileBigAvatar" style="width: 90px; height: 90px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #6366f1); display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800; color: #ffffff; border: 3px solid rgba(255,255,255,0.2); box-shadow: 0 8px 32px rgba(37,99,235,0.4);">
                S
              </div>
              <div style="position: absolute; bottom: 2px; right: 2px; width: 18px; height: 18px; border-radius: 50%; background: #22c55e; border: 2px solid #0f172a;"></div>
            </div>
            <!-- Identity -->
            <div style="flex: 1; min-width: 200px;">
              <div style="font-family: var(--font-heading); font-size: 1.65rem; font-weight: 800; color: #ffffff; margin-bottom: 0.3rem;" id="profileHeaderName">SalesGenie User</div>
              <div style="font-size: 0.88rem; color: rgba(255,255,255,0.65); margin-bottom: 0.7rem;" id="profileHeaderEmail">user@example.com</div>
              <div style="display: flex; gap: 0.55rem; flex-wrap: wrap;">
                <span style="background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.18); border-radius: 100px; padding: 0.25rem 0.75rem; font-size: 0.74rem; font-weight: 700; color: #e0e7ff;">Enterprise Plan</span>
                <span style="background: rgba(34,197,94,0.15); border: 1px solid rgba(34,197,94,0.3); border-radius: 100px; padding: 0.25rem 0.75rem; font-size: 0.74rem; font-weight: 700; color: #4ade80;">Active</span>
                <span style="background: rgba(37,99,235,0.2); border: 1px solid rgba(37,99,235,0.35); border-radius: 100px; padding: 0.25rem 0.75rem; font-size: 0.74rem; font-weight: 700; color: #93c5fd;">Admin</span>
              </div>
            </div>
            <!-- Stats -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; text-align: center; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-md); padding: 1rem 1.5rem;">
              <div>
                <div style="font-size: 1.5rem; font-weight: 800; color: #60a5fa;" id="profileStatLeads">8</div>
                <div style="font-size: 0.72rem; color: rgba(255,255,255,0.5); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Leads</div>
              </div>
              <div style="border-left: 1px solid rgba(255,255,255,0.1); border-right: 1px solid rgba(255,255,255,0.1); padding: 0 1.25rem;">
                <div style="font-size: 1.5rem; font-weight: 800; color: #34d399;">91</div>
                <div style="font-size: 0.72rem; color: rgba(255,255,255,0.5); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Avg Score</div>
              </div>
              <div>
                <div style="font-size: 1.5rem; font-weight: 800; color: #f59e0b;">$1.8M</div>
                <div style="font-size: 0.72rem; color: rgba(255,255,255,0.5); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Pipeline</div>
              </div>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;">

          <!-- Personal Information Card -->
          <div class="card" style="padding: 1.5rem; grid-column: 1 / -1;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: linear-gradient(135deg, #2563eb, #3b82f6); display: flex; align-items: center; justify-content: center;">
                  <i data-lucide="user" style="width: 15px; height: 15px; color: white;"></i>
                </div>
                <div style="font-family: var(--font-heading); font-weight: 700; font-size: 0.95rem; color: var(--text-headings);">Personal Information</div>
              </div>
              <button class="btn-ghost" style="font-size: 0.78rem; padding: 0.35rem 0.8rem;" onclick="document.getElementById('profileEditForm').style.display = document.getElementById('profileEditForm').style.display === 'none' ? 'block' : 'none'">
                <i data-lucide="edit-2" style="width: 13px; height: 13px;"></i> Edit Profile
              </button>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="profile-info-field">
                <div class="profile-label">Full Name</div>
                <div class="profile-value" id="profileDisplayName">SalesGenie User</div>
              </div>
              <div class="profile-info-field">
                <div class="profile-label">Email Address</div>
                <div class="profile-value" id="profileDisplayEmail">user@example.com</div>
              </div>
              <div class="profile-info-field">
                <div class="profile-label">Job Title</div>
                <div class="profile-value" id="profileDisplayTitle">Sales Development Representative</div>
              </div>
              <div class="profile-info-field">
                <div class="profile-label">Organization</div>
                <div class="profile-value">SalesGenie Enterprise Workspace</div>
              </div>
              <div class="profile-info-field">
                <div class="profile-label">LinkedIn</div>
                <div class="profile-value" id="profileDisplayLinkedin" style="color: #3b82f6;">Not set</div>
              </div>
              <div class="profile-info-field">
                <div class="profile-label">Member Since</div>
                <div class="profile-value">August 2026</div>
              </div>
            </div>

            <!-- Edit Form (hidden by default) -->
            <div id="profileEditForm" style="display: none; margin-top: 1.25rem; padding-top: 1.25rem; border-top: 1px solid var(--border-color);">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem; margin-bottom: 1rem;">
                <div class="form-group">
                  <label class="form-label">Full Name</label>
                  <input type="text" class="form-input" id="profileEditName" placeholder="Your full name">
                </div>
                <div class="form-group">
                  <label class="form-label">Job Title</label>
                  <input type="text" class="form-input" id="profileEditTitle" placeholder="e.g. VP of Sales">
                </div>
                <div class="form-group">
                  <label class="form-label">LinkedIn URL</label>
                  <input type="url" class="form-input" id="profileEditLinkedin" placeholder="https://linkedin.com/in/...">
                </div>
                <div class="form-group">
                  <label class="form-label">Phone Number</label>
                  <input type="tel" class="form-input" id="profileEditPhone" placeholder="+1 (555) 000-0000">
                </div>
              </div>
              <div style="display: flex; gap: 0.65rem; justify-content: flex-end;">
                <button class="btn-ghost" onclick="document.getElementById('profileEditForm').style.display='none'">Cancel</button>
                <button class="btn-primary" onclick="saveProfileChanges()" style="padding: 0.5rem 1.25rem; font-size: 0.84rem;">
                  <i data-lucide="save" style="width: 14px; height: 14px;"></i> Save Changes
                </button>
              </div>
            </div>
          </div>

          <!-- Workspace Activity Card -->
          <div class="card" style="padding: 1.4rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.1rem;">
              <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: linear-gradient(135deg, #7c3aed, #6366f1); display: flex; align-items: center; justify-content: center;">
                <i data-lucide="activity" style="width: 15px; height: 15px; color: white;"></i>
              </div>
              <div style="font-family: var(--font-heading); font-weight: 700; font-size: 0.95rem; color: var(--text-headings);">Recent Activity</div>
            </div>
            <div id="profileActivityFeed" style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div class="profile-activity-row">
                <div class="profile-activity-dot" style="background: #22c55e;"></div>
                <div>
                  <div class="profile-activity-text">Lead pipeline synced from Signal Radar</div>
                  <div class="profile-activity-time">Just now</div>
                </div>
              </div>
              <div class="profile-activity-row">
                <div class="profile-activity-dot" style="background: #3b82f6;"></div>
                <div>
                  <div class="profile-activity-text">8 enterprise prospects scored & ranked</div>
                  <div class="profile-activity-time">Today</div>
                </div>
              </div>
              <div class="profile-activity-row">
                <div class="profile-activity-dot" style="background: #f59e0b;"></div>
                <div>
                  <div class="profile-activity-text">Outreach draft generated for Stripe</div>
                  <div class="profile-activity-time">Today</div>
                </div>
              </div>
              <div class="profile-activity-row">
                <div class="profile-activity-dot" style="background: #8b5cf6;"></div>
                <div>
                  <div class="profile-activity-text">CRM sync completed: Salesforce</div>
                  <div class="profile-activity-time">Yesterday</div>
                </div>
              </div>
              <div class="profile-activity-row">
                <div class="profile-activity-dot" style="background: #06b6d4;"></div>
                <div>
                  <div class="profile-activity-text">Signed in with Google OAuth</div>
                  <div class="profile-activity-time">August 29, 2026</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Integrations Card -->
          <div class="card" style="padding: 1.4rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.1rem;">
              <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: linear-gradient(135deg, #0891b2, #06b6d4); display: flex; align-items: center; justify-content: center;">
                <i data-lucide="link-2" style="width: 15px; height: 15px; color: white;"></i>
              </div>
              <div style="font-family: var(--font-heading); font-weight: 700; font-size: 0.95rem; color: var(--text-headings);">Integrations</div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div class="profile-integration-row">
                <div style="display: flex; align-items: center; gap: 0.65rem;">
                  <div style="width: 34px; height: 34px; border-radius: 8px; background: #fff; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; font-size: 1rem;">🔵</div>
                  <div>
                    <div style="font-size: 0.84rem; font-weight: 700; color: var(--text-headings);">Google Workspace</div>
                    <div style="font-size: 0.73rem; color: #22c55e; font-weight: 600;">Connected</div>
                  </div>
                </div>
                <span style="font-size: 0.72rem; background: rgba(34,197,94,0.1); color: #22c55e; border: 1px solid rgba(34,197,94,0.2); border-radius: 100px; padding: 0.2rem 0.6rem; font-weight: 700;">Active</span>
              </div>
              <div class="profile-integration-row">
                <div style="display: flex; align-items: center; gap: 0.65rem;">
                  <div style="width: 34px; height: 34px; border-radius: 8px; background: #fff; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; font-size: 1rem;">☁️</div>
                  <div>
                    <div style="font-size: 0.84rem; font-weight: 700; color: var(--text-headings);">Salesforce CRM</div>
                    <div style="font-size: 0.73rem; color: var(--text-muted); font-weight: 500;">Not connected</div>
                  </div>
                </div>
                <button class="btn-ghost" style="font-size: 0.73rem; padding: 0.25rem 0.65rem;" onclick="navigateTo('crm')">Connect</button>
              </div>
              <div class="profile-integration-row">
                <div style="display: flex; align-items: center; gap: 0.65rem;">
                  <div style="width: 34px; height: 34px; border-radius: 8px; background: #fff; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; font-size: 1rem;">🔔</div>
                  <div>
                    <div style="font-size: 0.84rem; font-weight: 700; color: var(--text-headings);">Slack Notifications</div>
                    <div style="font-size: 0.73rem; color: var(--text-muted); font-weight: 500;">Not connected</div>
                  </div>
                </div>
                <button class="btn-ghost" style="font-size: 0.73rem; padding: 0.25rem 0.65rem;">Connect</button>
              </div>
              <div class="profile-integration-row">
                <div style="display: flex; align-items: center; gap: 0.65rem;">
                  <div style="width: 34px; height: 34px; border-radius: 8px; background: #fff; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; font-size: 1rem;">📧</div>
                  <div>
                    <div style="font-size: 0.84rem; font-weight: 700; color: var(--text-headings);">Gmail Outreach</div>
                    <div style="font-size: 0.73rem; color: var(--text-muted); font-weight: 500;">Not connected</div>
                  </div>
                </div>
                <button class="btn-ghost" style="font-size: 0.73rem; padding: 0.25rem 0.65rem;">Connect</button>
              </div>
            </div>
          </div>

          <!-- Preferences Card -->
          <div class="card" style="padding: 1.4rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.1rem;">
              <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: linear-gradient(135deg, #d97706, #f59e0b); display: flex; align-items: center; justify-content: center;">
                <i data-lucide="settings" style="width: 15px; height: 15px; color: white;"></i>
              </div>
              <div style="font-family: var(--font-heading); font-weight: 700; font-size: 0.95rem; color: var(--text-headings);">Preferences</div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <div style="font-size: 0.84rem; font-weight: 600; color: var(--text-headings);">AI Signal Notifications</div>
                  <div style="font-size: 0.73rem; color: var(--text-muted);" id="statusSignalNotifs">Real-time buying intent alerts</div>
                </div>
                <label class="profile-toggle">
                  <input type="checkbox" checked id="toggleSignalNotifs" onchange="handleTogglePref('signals', this.checked)">
                  <span class="profile-toggle-track"></span>
                </label>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <div style="font-size: 0.84rem; font-weight: 600; color: var(--text-headings);">Weekly Pipeline Report</div>
                  <div style="font-size: 0.73rem; color: var(--text-muted);" id="statusWeeklyReport">Emailed every Monday at 9 AM</div>
                </div>
                <label class="profile-toggle">
                  <input type="checkbox" checked id="toggleWeeklyReport" onchange="handleTogglePref('weekly_report', this.checked)">
                  <span class="profile-toggle-track"></span>
                </label>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <div style="font-size: 0.84rem; font-weight: 600; color: var(--text-headings);">Auto-score New Leads</div>
                  <div style="font-size: 0.73rem; color: var(--text-muted);" id="statusAutoScore">Run AI scoring on lead creation</div>
                </div>
                <label class="profile-toggle">
                  <input type="checkbox" checked id="toggleAutoScore" onchange="handleTogglePref('auto_score', this.checked)">
                  <span class="profile-toggle-track"></span>
                </label>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <div style="font-size: 0.84rem; font-weight: 600; color: var(--text-headings);">Dark Mode</div>
                  <div style="font-size: 0.73rem; color: var(--text-muted);" id="statusDarkMode">Currently active</div>
                </div>
                <label class="profile-toggle">
                  <input type="checkbox" id="toggleDarkMode" onchange="handleToggleDarkModePref(this.checked)">
                  <span class="profile-toggle-track"></span>
                </label>
              </div>
            </div>
          </div>

          <!-- Danger Zone -->
          <div class="card" style="padding: 1.4rem; border-color: rgba(239,68,68,0.15);">
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.1rem;">
              <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: linear-gradient(135deg, #dc2626, #ef4444); display: flex; align-items: center; justify-content: center;">
                <i data-lucide="alert-triangle" style="width: 15px; height: 15px; color: white;"></i>
              </div>
              <div style="font-family: var(--font-heading); font-weight: 700; font-size: 0.95rem; color: #ef4444;">Danger Zone</div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: rgba(239,68,68,0.04); border: 1px solid rgba(239,68,68,0.12); border-radius: var(--radius-sm);">
                <div>
                  <div style="font-size: 0.84rem; font-weight: 600; color: var(--text-headings);">Sign Out</div>
                  <div style="font-size: 0.73rem; color: var(--text-muted);">End your current session</div>
                </div>
                <button class="btn-ghost" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; border-color: rgba(239,68,68,0.25); color: #ef4444;" onclick="handleSignOut()">
                  <i data-lucide="log-out" style="width: 13px; height: 13px;"></i> Sign Out
                </button>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: rgba(239,68,68,0.04); border: 1px solid rgba(239,68,68,0.12); border-radius: var(--radius-sm);">
                <div>
                  <div style="font-size: 0.84rem; font-weight: 600; color: var(--text-headings);">Delete Account</div>
                  <div style="font-size: 0.73rem; color: var(--text-muted);">Permanently remove your workspace</div>
                </div>
                <button class="btn-ghost" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; border-color: rgba(239,68,68,0.25); color: #ef4444;">Delete</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ── MOBILE BOTTOM NAVIGATION DOCK (PHONES & SMALL TABLETS) ── -->
    <nav class="mobile-bottom-nav" id="mobileBottomNav" aria-label="Mobile Navigation">
      <button class="mobile-nav-tab active" id="mobileTabLeads" onclick="navigateTo('leads')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
        <span>Leads</span>
      </button>
      <button class="mobile-nav-tab" id="mobileTabRadar" onclick="navigateTo('radar')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg>
        <span>Radar</span>
      </button>
      <button class="mobile-nav-tab" id="mobileTabOutreach" onclick="navigateTo('outreach')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        <span>Outreach</span>
      </button>
      <button class="mobile-nav-tab" id="mobileTabConversations" onclick="navigateTo('conversations')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span>Calls</span>
      </button>
      <button class="mobile-nav-tab" id="mobileTabDashboard" onclick="navigateTo('dashboard')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
        <span>Metrics</span>
      </button>
    </nav>
        </main>
    </div>
  </div>

  <!-- 1. Authentication & Google OAuth Modal -->
  <div class="modal-backdrop" id="authModal">
    <div class="modal-card" style="max-width: 440px;">
      <div class="modal-header">
        <div class="modal-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span id="authModalHeaderTitle">Sign In to SalesGenie</span>
        </div>
        <button class="modal-close-btn" onclick="closeAuthModal()"><i data-lucide="x"></i></button>
      </div>
      <div class="auth-tab-group">
        <button class="auth-tab-btn active" id="authTabSignIn" onclick="switchAuthMode('signin')">Sign In</button>
        <button class="auth-tab-btn" id="authTabRegister" onclick="switchAuthMode('register')">Create Account</button>
      </div>
      <button type="button" class="btn-google-auth" onclick="loginWithRealGoogle()">
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
        <span>Sign in with Google</span>
      </button>
      <div class="auth-divider"><span>OR LOG IN WITH DETAILS</span></div>
      <form onsubmit="submitAuthForm(event)">
        <div class="form-group" id="authNameGroup" style="display: none;">
          <label class="form-label">Full Name</label>
          <input type="text" id="authFullNameInput" class="form-input" placeholder="e.g. Sarah Jenkins" />
        </div>
        <div class="form-group" id="authOrgGroup" style="display: none;">
          <label class="form-label">Organization Name</label>
          <input type="text" id="authOrgInput" class="form-input" placeholder="e.g. Acme Corp" />
        </div>
        <div class="form-group">
          <label class="form-label">Work Email</label>
          <input type="email" id="authEmailInput" class="form-input" placeholder="name@company.com" required />
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" id="authPasswordInput" class="form-input" placeholder="Enter password" required />
        </div>
        <button type="submit" class="btn-primary" style="width: 100%; padding: 0.75rem; margin-top: 0.5rem;" id="authSubmitBtn">
          <span id="authSubmitBtnText">Sign In to Platform</span>
        </button>
      </form>
    </div>
  </div>

  <!-- 3. Export Modal -->
  <div class="modal-backdrop" id="exportReportModal">
    <div class="modal-card">
      <div class="modal-header">
        <div class="modal-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          <span>Export Pipeline Intelligence</span>
        </div>
        <button class="modal-close-btn" onclick="closeExportModal()"><i data-lucide="x"></i></button>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem;">Choose your preferred report format to download or print active pipeline telemetry:</p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
        <div class="card clickable" onclick="executeCsvExport()" style="text-align: center; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-card-subtle);">
          <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">📊</div>
          <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-headings); margin-bottom: 0.25rem;">CSV Spreadsheet</div>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Formatted for Excel & Google Sheets</div>
        </div>
        <div class="card clickable" onclick="executePdfPrint()" style="text-align: center; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-card-subtle);">
          <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">📄</div>
          <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-headings); margin-bottom: 0.25rem;">PDF Executive Report</div>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Print-ready summary report</div>
        </div>
        <div class="card clickable" onclick="executeJsonExport()" style="text-align: center; padding: 1.25rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-card-subtle);">
          <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">💾</div>
          <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-headings); margin-bottom: 0.25rem;">Raw JSON</div>
          <div style="font-size: 0.74rem; color: var(--text-muted);">Full structured API payload</div>
        </div>
      </div>
      <div style="display: flex; justify-content: flex-end;">
        <button type="button" class="btn-secondary" onclick="closeExportModal()">Close</button>
      </div>
    </div>
  </div>

  <!-- 4. Add Lead Modal -->
  <div class="modal-backdrop" id="addLeadModal">
    <div class="modal-card">
      <div class="modal-header">
        <div class="modal-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
          <span>Add New Lead</span>
        </div>
        <button class="modal-close-btn" onclick="closeAddLeadModal()"><i data-lucide="x"></i></button>
      </div>
      <form onsubmit="submitAddLead(event)">
        <div class="form-group">
          <label class="form-label">Company Name *</label>
          <input type="text" id="newLeadCompany" class="form-input" placeholder="e.g. Acme Corp" required />
        </div>
        <div class="form-group">
          <label class="form-label">Contact Name *</label>
          <input type="text" id="newLeadContactName" class="form-input" placeholder="e.g. Sarah Jenkins" required />
        </div>
        <div class="form-group">
          <label class="form-label">Work Email *</label>
          <input type="email" id="newLeadEmail" class="form-input" placeholder="sarah@company.com" required />
        </div>
        <div class="form-group">
          <label class="form-label">Industry</label>
          <select id="newLeadIndustry" class="form-input">
            <option value="Enterprise Software">Enterprise Software</option>
            <option value="Fintech">Fintech</option>
            <option value="Video">Video</option>
            <option value="Cryptocurrency">Cryptocurrency</option>
            <option value="Collaboration">Collaboration</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Stage</label>
          <select id="newLeadStage" class="form-input">
            <option value="New">New</option>
            <option value="Qualified">Qualified</option>
            <option value="Proposal">Proposal</option>
            <option value="Negotiation">Negotiation</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Deal Size ($ ARR)</label>
          <input type="number" id="newLeadDealSize" class="form-input" placeholder="50000" />
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1rem;">
          <button type="button" class="btn-secondary" onclick="closeAddLeadModal()">Cancel</button>
          <button type="submit" class="btn-primary">Add Lead</button>
        </div>
      </form>
    </div>
  </div>

  <!-- 5. Log Interaction Modal -->
  <div class="modal-backdrop" id="logInteractionModal">
    <div class="modal-card">
      <div class="modal-header">
        <div class="modal-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          <span>Log Interaction for <span id="logInteractionLeadName">Account</span></span>
        </div>
        <button class="modal-close-btn" onclick="closeLogInteractionModal()"><i data-lucide="x"></i></button>
      </div>
      <form onsubmit="submitLogInteraction(event)">
        <div class="form-group">
          <label class="form-label">Interaction Type</label>
          <select id="interactionType" class="form-input">
            <option value="Call">Phone Call</option>
            <option value="Email">Email Exchange</option>
            <option value="Demo">Product Demo</option>
            <option value="Meeting">Executive Meeting</option>
            <option value="Note">Internal Note</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Notes & Highlights *</label>
          <textarea id="interactionNotes" class="form-input" rows="4" placeholder="Discussed transcode compute ROI. Client requested proposal..." required></textarea>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1rem;">
          <button type="button" class="btn-secondary" onclick="closeLogInteractionModal()">Cancel</button>
          <button type="submit" class="btn-primary">Log & Sync to CRM</button>
        </div>
      </form>
    </div>
  </div>

  <!-- 6. Send Email Modal -->
  <div class="modal-backdrop" id="sendEmailModal">
    <div class="modal-card">
      <div class="modal-header">
        <div class="modal-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          <span>Dispatch Outreach Sequence</span>
        </div>
        <button class="modal-close-btn" onclick="closeSendEmailModal()"><i data-lucide="x"></i></button>
      </div>
      <div class="form-group">
        <label class="form-label">To</label>
        <input type="text" id="sendEmailTo" class="form-input" readonly />
      </div>
      <div class="form-group">
        <label class="form-label">Subject</label>
        <input type="text" id="sendEmailSubject" class="form-input" readonly />
      </div>
      <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.5rem 0 1rem;">This email will be dispatched via your connected workspace mail provider and logged directly to Salesforce CRM timeline.</p>
      <div style="display: flex; justify-content: flex-end; gap: 0.75rem;">
        <button type="button" class="btn-secondary" onclick="closeSendEmailModal()">Cancel</button>
        <button type="button" class="btn-primary" onclick="confirmSendEmail()">Confirm & Dispatch</button>
      </div>
    </div>
  </div>

  <!-- 7. A/B Test Modal -->
  <div class="modal-backdrop" id="abTestModal">
    <div class="modal-card" style="max-width: 600px;">
      <div class="modal-header">
        <div class="modal-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>
          <span>AI Outreach A/B Variations</span>
        </div>
        <button class="modal-close-btn" onclick="closeAbTestModal()"><i data-lucide="x"></i></button>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem;">
        <div class="card" style="padding: 1rem; border: 1px solid var(--border-color); background: var(--bg-card-subtle);">
          <div style="font-weight: 700; font-size: 0.85rem; color: #2563eb; margin-bottom: 0.5rem;">Variation A (Pain-Point Focus)</div>
          <div style="font-size: 0.8rem; line-height: 1.5; color: var(--text-body);" id="abVariationA">
            Hi Eric, Noticed Ramp is scaling FastAPI and Snowflake workflows. Many fintech leaders face real-time intelligence bottlenecks as transaction volumes double. Would you have 10 minutes to review how we automate pipeline scoring?
          </div>
          <button class="btn-secondary" style="width: 100%; margin-top: 0.75rem; font-size: 0.78rem;" onclick="applyAbVariation('A')">Use Variation A</button>
        </div>
        <div class="card" style="padding: 1rem; border: 1px solid var(--border-color); background: var(--bg-card-subtle);">
          <div style="font-weight: 700; font-size: 0.85rem; color: #059669; margin-bottom: 0.5rem;">Variation B (Milestone & ROI Focus)</div>
          <div style="font-size: 0.8rem; line-height: 1.5; color: var(--text-body);" id="abVariationB">
            Hi Eric, Huge congrats on Ramp's Series D milestones. We recently published a benchmark showing a 40% boost in high-fit account conversion for modern fintech stacks. Would you be open to a 10-minute briefing next Tuesday?
          </div>
          <button class="btn-primary" style="width: 100%; margin-top: 0.75rem; font-size: 0.78rem;" onclick="applyAbVariation('B')">Use Variation B</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Toast Notification Container -->
  <div class="toast-container" id="toastContainer"></div>
`;
})();