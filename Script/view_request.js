const applicants = [
    {
        id: 1,
        name: "Adenuga Adeegun Olajide",
        title: "Product Design (UX Design)",
        location: "Lagos, Nigeria",
        rating: 4.0,
        ratings: "40 Ratings",
        skills: ["UI/UX Design", "Figma", "UX Design"],
        matchPercentage: 87,
        link: "view_applicants_profile_uiux.html",
        image: "https://res.cloudinary.com/dezoqbzim/image/upload/v1769273636/Frame_2147258844_fcumnu.png"
    },
    {
        id: 2,
        name: "Chidera Okafor",
        title: "Frontend Developer",
        location: "Abuja, Nigeria",
        rating: 4.5,
        ratings: "50 Ratings",
        skills: ["React", "JavaScript", "CSS"],
        matchPercentage: 92,
        link: "view_applicants_profile_frontend.html",
        image: "https://res.cloudinary.com/dezoqbzim/image/upload/v1768977607/Frame_90_1_frwzqs.png"
    },
    {
        id: 3,
        name: "Tunde Bakare",
        title: "Backend Developer",
        location: "Lagos, Nigeria",
        rating: 4.2,
        ratings: "30 Ratings",
        skills: ["Node.js", "Express", "SQL"],
        matchPercentage: 88,
        link: "view_applicants_profile_backend.html",
        image: "https://res.cloudinary.com/dezoqbzim/image/upload/v1768977153/Frame_90_nedzzq.png"
    },
    {
        id: 4,
        name: "Jide Adeboyejo",
        title: "FullStack Software Developer",
        location: "Port Harcourt, Nigeria",
        rating: 4.8,
        ratings: "60 Ratings",
        skills: ["HTML", "Tailwind CSS", "JavaScript"],
        matchPercentage: 95,
        link: "view_applicants_profile_fullstack.html",
        image: "https://res.cloudinary.com/dezoqbzim/image/upload/v1769541070/Black_dude_lv2yhh.png"
    }
];

function generateSkillTags(skills) {
    const colors = ['bg-indigo-100 text-indigo-700', 'bg-cyan-100 text-cyan-700', 'bg-orange-100 text-orange-700'];
    return skills.map((skill, index) => 
        `<span class="px-3 py-1 ${colors[index % colors.length]} rounded-full text-xs font-medium">${skill}</span>`
    ).join('');
}

function generateApplicantCard(applicant) {
    return `
        <div class="border border-gray-200 rounded-lg p-5">
            <!-- Profile Header -->
            <div class="flex items-start gap-3 mb-4">
                <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img src="${applicant.image}" alt="Profile" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-gray-900 text-sm mb-0.5">
                        <a href="${applicant.link}" class="hover:underline text-indigo-700">${applicant.name}</a>
                    </h3>
                    <p class="text-xs text-gray-600">${applicant.title}</p>
                </div>
            </div>

            <!-- Location and Rating -->
            <div class="flex items-center justify-between mb-4 text-xs text-gray-600">
                <div class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>${applicant.location}</span>
                </div>
                <div class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-orange-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span>${applicant.rating}</span>
                    <span class="text-gray-500">${applicant.ratings}</span>
                </div>
            </div>

            <!-- Skills -->
            <div class="mb-4">
                <p class="text-xs text-gray-600 mb-2">Skills:</p>
                <div class="flex flex-wrap gap-2">
                    ${generateSkillTags(applicant.skills)}
                </div>
            </div>

            <!-- Match Percentage -->
            <div class="mb-4">
                <p class="text-xs text-gray-600 mb-2">Match Percentage:</p>
                <div class="flex items-center gap-2">
                    <div class="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-500" style="width: ${applicant.matchPercentage}%"></div>
                    </div>
                    <span class="text-sm font-semibold text-gray-900">${applicant.matchPercentage}% Match</span>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3">
                <button onclick="acceptApplicant(${applicant.id})" class="flex-1 bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm">
                    Accept
                </button>
                <button onclick="rejectApplicant(${applicant.id})" class="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm">
                    Reject
                </button>
            </div>
        </div>
    `;
}

function renderApplicants() {
    const grid = document.getElementById('applicantsGrid');
    grid.innerHTML = applicants.map(applicant => generateApplicantCard(applicant)).join('');
}

function acceptApplicant(id) {
    const applicant = applicants.find(a => a.id === id);
    if (confirm(`Accept ${applicant.name} for this skill swap?`)) {
        alert('Applicant accepted successfully!');
    }
}

function rejectApplicant(id) {
    const applicant = applicants.find(a => a.id === id);
    if (confirm(`Reject ${applicant.name} from this skill swap?`)) {
        alert('Applicant rejected.');
    }
}

// Initial render
renderApplicants();
