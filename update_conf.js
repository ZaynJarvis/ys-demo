const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public/images');
const outputPath = path.join(__dirname, 'src/app/utils/config.json');
const csvPath = path.join(__dirname, 'projects.csv');

// Helper function to parse CSV data
function parseCSVData(data) {
    return data.split('\n').filter(line => line).map(line => {
        const [id, name, imageUrl, date, description] = line.split('||');
        return { id, name, imageUrl, date, description };
    });
}

// Read and process the CSV file for profile info
const csvContent = fs.readFileSync(csvPath, 'utf-8');
const product_info = parseCSVData(csvContent);

// Reading directory for images
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error("An error occurred while reading the directory:", err);
        return;
    }

    // Filter for image files and prepend the path
    const imageFiles = files
        .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
        .map(file => `/images/${file}`);

    // Sort files naturally
    imageFiles.sort((a, b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}));

    // Create a JSON object
    const config = {
        gallery_path: imageFiles,
        product_info: product_info,
        about: [{
            title: "Our Expertise",
            content: "At Cube Construction, we leverage over two decades of specialized experience in shop interior design to create spaces that not only meet the unique needs of our clients but also exceed their expectations. Based in the vibrant city of Singapore, we have a proven track record of transforming commercial environments into stunning, functional spaces that attract and engage customers.",
        },{
            title: "Commitment to Quality",
            content: "Our dedication to delivering the highest quality results is unwavering. At Cube Construction, every project is a partnership, and we commit to maintaining open communication, transparency, and meticulous attention to detail. We use only the finest materials and the latest design techniques to ensure that each space we design stands the test of time.",
        },{
            title: "Innovative Design",
            content: "Innovation is at the heart of Cube Construction. We continuously explore new trends, technologies, and creative design techniques to provide cutting-edge solutions tailored to each client’s needs. Whether it's a retail shop, a boutique, or a large commercial center, we strive to create spaces that are both visually appealing and highly functional, ensuring that every square inch works in harmony with the client's vision and operational requirements.",
        }]
    };

    // Write JSON file
    fs.writeFile(outputPath, JSON.stringify(config, null, 4), err => {
        if (err) {
            console.error("An error occurred while writing JSON Object to File.", err);
            return;
        }

        console.log("JSON file has been saved.");
    });
});