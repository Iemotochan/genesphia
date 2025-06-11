// Configuration and Constants
const CONFIG = {
    // Application Settings
    MAX_LEVEL: 9,
    INITIAL_TRUST_LEVEL: 15,
    TRUST_INCREMENT: 5,
    LEVEL_UP_TRUST_BONUS: 10,
    
    // Animation Settings
    PARTICLE_COUNT: 15,
    CELEBRATION_PARTICLE_COUNT: 50,
    FLOATING_HEARTS_COUNT: 20,
    STARS_COUNT: 50,
    
    // Timing Settings
    PARTICLE_LIFETIME: 2000,
    MESSAGE_DISPLAY_TIME: 2000,
    CELEBRATION_DURATION: 2500,
    HEART_SPAWN_INTERVAL: 3000,
    
    // Visual Settings
    HEART_SIZE: 30,
    FLOATING_HEART_SIZE: 20,
    RIPPLE_SCALE: 4,
    
    // Image Paths
    IMAGES: {
        BACKGROUND: './image/back.png',
        HEART_1: './image/1.png',
        HEART_2: './image/2.png'
    },
    
    // Level Configuration
    LEVEL_THRESHOLDS: {
        1: { name: '初めの一歩', color: '#ff6b9d', hearts: 'level-low' },
        2: { name: '心の扉', color: '#ff7ba8', hearts: 'level-low' },
        3: { name: '信頼の芽', color: '#ff8bb3', hearts: 'level-low' },
        4: { name: '深い絆', color: '#ff9bbe', hearts: 'level-low' },
        5: { name: '秘密の共有', color: '#ffabc9', hearts: 'level-low' },
        6: { name: '親密な関係', color: '#ffbbd4', hearts: 'level-high' },
        7: { name: '禁断の扉', color: '#ffcbdf', hearts: 'level-high' },
        8: { name: '究極の信頼', color: '#ffdbe9', hearts: 'level-high' },
        9: { name: '完全な結合', color: '#ffebf4', hearts: 'level-high' }
    }
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}