// --- Save Data to Database ---
async function saveData(data) {
    try {
        // Show saving indicator
        showNotification('⏳ Saving to database...', 'info');
        
        const response = await fetch(API_SAVE, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
            console.log('✅ Data saved to database');
            // Still save to localStorage as backup
            localStorage.setItem('gdgWebsiteData', JSON.stringify(data));
            localStorage.setItem('gdgDataUpdated', Date.now().toString());
            
            if (result.database) {
                showNotification('✅ Data saved to database!', 'success');
            } else if (result.fallback) {
                showNotification('⚠️ Saved to localStorage (database error)', 'warning');
            }
            return true;
        } else {
            throw new Error(result.message || 'Save failed');
        }
    } catch (e) {
        console.error('Error saving data:', e);
        // Fallback to localStorage
        localStorage.setItem('gdgWebsiteData', JSON.stringify(data));
        localStorage.setItem('gdgDataUpdated', Date.now().toString());
        showNotification('⚠️ Saved to localStorage only (database error)', 'warning');
        return false;
    }
}