/**
 * mobile-nav.js
 * SalesGenie — Mobile Navigation (Drawer, Bottom Nav, Overlay)
 */

function toggleMobileDrawer() {
  const drawer = document.getElementById('appSideDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  if (!drawer) return;
  if (drawer.classList.contains('mobile-open')) {
    closeMobileDrawer();
  } else {
    drawer.classList.add('mobile-open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileDrawer() {
  const drawer = document.getElementById('appSideDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  if (!drawer) return;
  drawer.classList.remove('mobile-open');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function syncMobileNav(page) {
  const map = { 
    leads: 'mobileTabLeads', 
    radar: 'mobileTabRadar', 
    outreach: 'mobileTabOutreach',
    conversations: 'mobileTabConversations', 
    dashboard: 'mobileTabDashboard',
    crm: 'mobileTabLeads', 
    profile: 'mobileTabLeads', 
    landing: 'mobileTabLeads' 
  };
  document.querySelectorAll('.mobile-nav-tab').forEach(t => t.classList.remove('active'));
  const id = map[page];
  if (id) { 
    const el = document.getElementById(id); 
    if (el) el.classList.add('active'); 
  }
}

// Global window assignments
window.toggleMobileDrawer = toggleMobileDrawer;
window.closeMobileDrawer = closeMobileDrawer;
window.syncMobileNav = syncMobileNav;

// Auto-bind overlay click & wrap navigateTo
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('mobileDrawerOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeMobileDrawer);
  }
  
  const _orig = window.navigateTo;
  window.navigateTo = function(page) {
    if (typeof _orig === 'function') _orig(page);
    syncMobileNav(page);
    closeMobileDrawer();
  };
});