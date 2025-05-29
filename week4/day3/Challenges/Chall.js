// 1
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    
  
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}
// 3
const video1 = new Video("JavaScript Tutorial for Beginners", "CodeAcademy", 1800);
video1.watch();

// 4
const video2 = new Video("How to Cook Pasta", "ChefMaster", 600);
video2.watch();

console.log("--- Séparateur ---");

// 5
const videoData = [
    {
        title: "Advanced React Hooks",
        uploader: "TechGuru",
        time: 2400
    },
    {
        title: "Morning Yoga Routine",
        uploader: "YogaExpert",
        time: 1200
    },
    {
        title: "History of Ancient Rome",
        uploader: "HistoryChannel",
        time: 3600
    },
    {
        title: "Guitar Lesson - Beginner Chords",
        uploader: "MusicTeacher",
        time: 900
    },
    {
        title: "Python Data Science",
        uploader: "DataScientist",
        time: 5400
    }
];

// 6
console.log("Création et utilisation de vidéos à partir du tableau :");
const videoInstances = [];

for (let i = 0; i < videoData.length; i++) {
    const data = videoData[i];
    const videoInstance = new Video(data.title, data.uploader, data.time);
    videoInstances.push(videoInstance);
    videoInstance.watch();
}

console.log("--- Alternative avec forEach ---");


videoData.forEach(data => {
    const video = new Video(data.title, data.uploader, data.time);
    video.watch();
});

console.log("--- Alternative avec map ---");

const allVideos = videoData.map(data => new Video(data.title, data.uploader, data.time));

allVideos.forEach(video => video.watch());

console.log("--- Informations supplémentaires ---");

console.log(`Première vidéo: ${video1.title} (${video1.time} secondes)`);
console.log(`Deuxième vidéo: ${video2.title} par ${video2.uploader}`);

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

class ImprovedVideo extends Video {
    constructor(title, uploader, time) {
        super(title, uploader, time);
    }
    
    watch() {
        const formattedTime = formatTime(this.time);
        console.log(`${this.uploader} watched all ${formattedTime} (${this.time}s) of ${this.title}!`);
    }
    
    getInfo() {
        return `"${this.title}" by ${this.uploader} - Duration: ${formatTime(this.time)}`;
    }
}