// Constants
const ROLES = ["Data Scientist", "Data Analyst", "ML Engineer", "AI Engineer"];
const ROLE_ROTATION_INTERVAL = 3000;
const PARTICLE_COUNT = 100;
const PARTICLE_CONNECTION_DISTANCE = 150;
const MOUSE_INTERACTION_RADIUS = 120;
const PARTICLE_COLOR = 'rgba(100, 255, 218, 0.075)';

// Role Rotator
class RoleRotator {
  constructor() {
    this.index = 0;
    this.roleElement = document.getElementById("role-title");
    this.setupStyles();
    this.startRotation();
  }

  setupStyles() {
    this.roleElement.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    this.roleElement.style.display = "inline-block";
    this.roleElement.style.opacity = "1";
  }

  updateRole() {
    this.roleElement.style.opacity = "0";
    this.roleElement.style.transform = "translateY(10px)";
    
    setTimeout(() => {
      this.roleElement.innerText = ROLES[this.index];
      this.roleElement.style.opacity = "1";
      this.roleElement.style.transform = "translateY(0)";
      this.index = (this.index + 1) % ROLES.length;
    }, 500);
  }

  startRotation() {
    this.updateRole();
    setInterval(() => this.updateRole(), ROLE_ROTATION_INTERVAL);
  }
}

// Project Modal Handler
class ProjectModal {
  constructor() {
    this.modalContainer = document.getElementById('modalContainer');
    this.modal = document.getElementById('projectModal');
    this.content = document.getElementById('projectContent');
    this.dimBg = document.querySelector('.dim-background');
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.dimBg.addEventListener('click', () => this.close());
  }

  open(projectName) {
    this.content.innerHTML = this.getProjectContent(projectName);
    document.body.classList.add('modal-open');
    this.modalContainer.classList.add('active');
    this.dimBg.classList.add('active');
    this.modal.classList.add('active');
  }

  close() {
    document.body.classList.remove('modal-open');
    this.modalContainer.classList.remove('active');
    this.dimBg.classList.remove('active');
    this.modal.classList.remove('active');
  }

  getProjectContent(name) {
    // Project content definitions
    const projects = {
      "agent": `
        <h3>🔹 AI Research Agent</h3>
        
        <h4>📌 Overview</h4>
        <p>An intelligent research assistant that automates the process of gathering, analyzing, and summarizing information from the web. Built to help researchers and analysts save time while ensuring comprehensive coverage of their research topics.</p>

        <h4>🔍 Problem Statement</h4>
        <p>Manual research is time-consuming and can miss important information. Researchers need a tool that can automatically search, extract, and synthesize information from multiple sources while maintaining accuracy and relevance.</p>

        <h4>🛠️ Tools & Technologies</h4>
        <div class="tech-tags">
          <span>Python</span>
          <span>Streamlit</span>
          <span>Gemini LLM API</span>
          <span>Google Custom Search API</span>
          <span>ReportLab</span>
          <span>ChromaDB</span>
        </div>

        <h4>⚙️ Approach</h4>
        <ul>
          <li><strong>Data Collection:</strong> Integrated Google Custom Search API for targeted web searches</li>
          <li><strong>Processing:</strong> Implemented web scraping and content extraction</li>
          <li><strong>Analysis:</strong> Used Gemini LLM API for intelligent summarization</li>
          <li><strong>Storage:</strong> Implemented ChromaDB for efficient context storage and retrieval</li>
          <li><strong>Interface:</strong> Built an intuitive Streamlit UI with voice input support</li>
        </ul>

        <h4>📈 Results</h4>
        <ul>
          <li>Reduced research time by 60%</li>
          <li>Improved information coverage by analyzing multiple sources simultaneously</li>
          <li>Generated well-structured PDF reports with citations</li>
        </ul>

        <div class="project-links">
          <a href="https://drive.google.com/file/d/1EPs-rE-sGucYjRzjxvmkvD8cMXWhWmNH/view" target="_blank" class="demo-link">View Demo</a>
          <a href="https://github.com/Ajayprasanna04/AI-Research-Agent" target="_blank" class="github-link">GitHub Repository</a>
        </div>`,
      "mri": `
        <h3>🔹 Health Insurance Response Prediction</h3>

        <h4>📌 Overview</h4>
        <p>A machine learning model that predicts whether potential customers will purchase health insurance based on marketing campaign data. Achieved 76% accuracy in predicting customer responses, helping improve lead targeting and sales strategies.</p>

        <h4>🔍 Problem Statement</h4>
        <p>Insurance companies need to optimize their marketing efforts by identifying customers most likely to purchase health insurance, reducing resource wastage and improving conversion rates.</p>

        <h4>🛠️ Tools & Technologies</h4>
        <div class="tech-tags">
          <span>Python</span>
          <span>Pandas</span>
          <span>Scikit-learn</span>
          <span>Matplotlib</span>
          <span>Seaborn</span>
          <span>SVM</span>
        </div>

        <h4>⚙️ Approach</h4>
        <ul>
          <li><strong>Data Preprocessing:</strong>
            <ul>
              <li>Handled missing values and encoded features</li>
              <li>Scaled numerical features</li>
              <li>Dropped high-cardinality columns</li>
            </ul>
          </li>
          <li><strong>Model Development:</strong>
            <ul>
              <li>Implemented K-fold cross-validation</li>
              <li>Compared multiple models (SVM, Decision Tree, Random Forest)</li>
              <li>Selected SVM with linear kernel as final model</li>
            </ul>
          </li>
        </ul>

        <h4>📈 Results</h4>
        <ul>
          <li>Model Accuracy: 76%</li>
          <li>Identified key factors influencing insurance purchases</li>
          <li>Developed targeted marketing strategies for different customer segments</li>
        </ul>

        <div class="project-links">
          <a href="https://github.com/Ajayprasanna04/Health-Insurance-Response-Prediction" target="_blank" class="github-link">GitHub Repository</a>
        </div>`,
      "ecommerce": `
        <h3>🔹 E-Commerce Transaction Analysis</h3>

        <h4>📌 Overview</h4>
        <p>A comprehensive analysis of online shop sales data to uncover trends, customer behavior, product performance, and cancellation patterns. The project provides actionable insights to improve business strategies and optimize revenue.</p>

        <h4>🔍 Problem Statement</h4>
        <p>E-commerce businesses need to understand customer behavior, identify successful products, and optimize their operations. This analysis helps in making data-driven decisions for business growth.</p>

        <h4>🛠️ Tools & Technologies</h4>
        <div class="tech-tags">
          <span>Python</span>
          <span>Pandas</span>
          <span>Plotly</span>
          <span>Seaborn</span>
          <span>Matplotlib</span>
          <span>Scikit-learn</span>
        </div>

        <h4>⚙️ Approach</h4>
        <ul>
          <li><strong>Data Preprocessing:</strong>
            <ul>
              <li>Cleaned and transformed 18,237 unique transaction records</li>
              <li>Handled missing values and duplicates</li>
              <li>Created derived features for analysis</li>
            </ul>
          </li>
          <li><strong>Analysis:</strong>
            <ul>
              <li>Calculated key business metrics</li>
              <li>Analyzed product performance</li>
              <li>Studied customer purchase patterns</li>
              <li>Investigated cancellation trends</li>
            </ul>
          </li>
        </ul>

        <h4>📈 Results</h4>
        <ul>
          <li>Analyzed £52.25M in total revenue</li>
          <li>Identified top-performing products</li>
          <li>Created customer segmentation</li>
          <li>Developed cancellation reduction strategies</li>
        </ul>

        <div class="project-links">
          <a href="https://github.com/Ajayprasanna04/E-Commerce-Transaction-Analysis" target="_blank" class="github-link">GitHub Repository</a>
        </div>`,
    "realestate": `
      <h3>Real Estate Intelligence</h3>
      
      <h4>Purpose</h4>
      <p>To build a data-driven real estate intelligence system that helps identify profitable land deals, predict construction costs, estimate selling price & ROI, and minimize project risks through AI and machine learning models.</p>
      
      <h4>How It Boosts Real Estate Business</h4>
      <ul>
        <li><strong>Land Discovery:</strong> Aggregates leads from real estate sites, social media, and government portals using a smart monitoring system</li>
        <li><strong>Deal Evaluation:</strong> Predicts land value and opportunity score using legal rates, market prices, and amenities</li>
        <li><strong>Cost Forecasting:</strong> Uses historical project data to predict construction costs by type, material, and location</li>
        <li><strong>ROI & Pricing:</strong> Accurately estimates selling price and ROI by analyzing location, buyer segment, and property features</li>
        <li><strong>Risk Reduction:</strong> Classifies projects based on success probability and financial risk using regression and classification models</li>
        <li><strong>Smart Marketing:</strong> Scores and targets buyers based on income, location, and preferences — boosting conversion and revenue</li>
      </ul>

      <h4>Technologies (Planned)</h4>
      <div class="tech-tags">
        <span>Python</span>
        <span>TensorFlow</span>
        <span>Scikit-learn</span>
        <span>FastAPI</span>
        <span>PostgreSQL</span>
        <span>React</span>
        <span>Web Scraping</span>
        <span>GIS Integration</span>
      </div>

      <h4>Development Status</h4>
      <p>Project is in the planning and prototyping stage. Development will begin soon with modular ML model and Real time data integration.</p>

      <div class="project-links">
        <a href="https://docs.google.com/presentation/d/1jcoF05hb5tL1cyldlrkWJWWqwR90mc3c/edit?slide=id.p1#slide=id.p1" target="_blank" class="demo-link">View Presentation</a>
      </div>`
    };
    return projects[name];
  }
}

// Particle Animation
class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.radius = Math.random() * 1.2 + 0.8;
    this.color = PARTICLE_COLOR;
  }

  update(mouse) {
    // Update particle position and handle mouse interaction
    if (mouse.x && mouse.y) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MOUSE_INTERACTION_RADIUS) {
        const angle = Math.atan2(dy, dx);
        const force = (MOUSE_INTERACTION_RADIUS - distance) / MOUSE_INTERACTION_RADIUS;
        this.vx -= Math.cos(angle) * force * 0.5;
        this.vy -= Math.sin(angle) * force * 0.5;
      }
    }

    // Add movement and handle boundaries
    this.vx += (Math.random() - 0.5) * 0.02;
    this.vy += (Math.random() - 0.5) * 0.02;
    this.vx = Math.max(Math.min(this.vx, 0.4), -0.4);
    this.vy = Math.max(Math.min(this.vy, 0.4), -0.4);
    
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > this.canvas.width) {
      this.vx *= -0.8;
      this.x = this.x < 0 ? 0 : this.canvas.width;
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.vy *= -0.8;
      this.y = this.y < 0 ? 0 : this.canvas.height;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Animation Controller
class AnimationController {
  constructor() {
    this.canvas = document.getElementById('bgCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: MOUSE_INTERACTION_RADIUS };
    
    // Set canvas background
    this.canvas.style.backgroundColor = '#0a192f';
    
    this.setupCanvas();
    this.createParticles();
    this.setupEventListeners();
    this.animate();
  }

  setupCanvas() {
    const resizeCanvas = () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }

  createParticles() {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      this.particles.push(new Particle(this.canvas));
    }
  }

  setupEventListeners() {
    this.canvas.addEventListener('mousemove', (event) => {
      this.mouse.x = event.x;
      this.mouse.y = event.y;
    });
  }

  drawConnections() {
    this.particles.forEach((particle, i) => {
      let connections = [];
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[j].x - particle.x;
        const dy = this.particles[j].y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < PARTICLE_CONNECTION_DISTANCE) {
          connections.push({
            particle: this.particles[j],
            distance: distance
          });
        }
      }
      
      connections.sort((a, b) => a.distance - b.distance);
      connections.slice(0, 5).forEach(connection => {
        this.drawConnection(particle, connection);
      });
    });
  }

  drawConnection(particle, connection) {
    const gradient = this.ctx.createLinearGradient(
      particle.x, particle.y,
      connection.particle.x, connection.particle.y
    );
    
    const opacity = 0.05 * (1 - connection.distance / PARTICLE_CONNECTION_DISTANCE);
    gradient.addColorStop(0, particle.color.replace('0.075', opacity.toString()));
    gradient.addColorStop(1, connection.particle.color.replace('0.075', opacity.toString()));
    
    this.ctx.beginPath();
    this.ctx.moveTo(particle.x, particle.y);
    this.ctx.lineTo(connection.particle.x, connection.particle.y);
    this.ctx.strokeStyle = gradient;
    this.ctx.lineWidth = (1 - connection.distance / PARTICLE_CONNECTION_DISTANCE) * 0.5;
    this.ctx.stroke();
  }

  animate() {
    // Use a darker blue for the fade effect
    this.ctx.fillStyle = 'rgba(10, 25, 47, 0.07)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(particle => {
      particle.update(this.mouse);
      particle.draw(this.ctx);
    });
    this.drawConnections();

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new RoleRotator();
  new ProjectModal();
  new AnimationController();
});

// Project Card Expander
function openProject(name) {
    const modalContainer = document.getElementById('modalContainer');
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('projectContent');
    const dimBg = document.querySelector('.dim-background');
  
    const projects = {
      "agent": `
        <h3>🔹 AI Research Agent</h3>
        
        <h4>📌 Overview</h4>
        <p>An intelligent research assistant that automates the process of gathering, analyzing, and summarizing information from the web. Built to help researchers and analysts save time while ensuring comprehensive coverage of their research topics.</p>

        <h4>🔍 Problem Statement</h4>
        <p>Manual research is time-consuming and can miss important information. Researchers need a tool that can automatically search, extract, and synthesize information from multiple sources while maintaining accuracy and relevance.</p>

        <h4>🛠️ Tools & Technologies</h4>
        <div class="tech-tags">
          <span>Python</span>
          <span>Streamlit</span>
          <span>Gemini LLM API</span>
          <span>Google Custom Search API</span>
          <span>ReportLab</span>
          <span>ChromaDB</span>
        </div>

        <h4>⚙️ Approach</h4>
        <ul>
          <li><strong>Data Collection:</strong> Integrated Google Custom Search API for targeted web searches</li>
          <li><strong>Processing:</strong> Implemented web scraping and content extraction</li>
          <li><strong>Analysis:</strong> Used Gemini LLM API for intelligent summarization</li>
          <li><strong>Storage:</strong> Implemented ChromaDB for efficient context storage and retrieval</li>
          <li><strong>Interface:</strong> Built an intuitive Streamlit UI with voice input support</li>
        </ul>

        <h4>📈 Results</h4>
        <ul>
          <li>Reduced research time by 60%</li>
          <li>Improved information coverage by analyzing multiple sources simultaneously</li>
          <li>Generated well-structured PDF reports with citations</li>
        </ul>

        <div class="project-links">
          <a href="https://drive.google.com/file/d/1EPs-rE-sGucYjRzjxvmkvD8cMXWhWmNH/view" target="_blank" class="demo-link">View Demo</a>
          <a href="https://github.com/Ajayprasanna04/AI-Research-Agent" target="_blank" class="github-link">GitHub Repository</a>
        </div>`,
      "mri": `
        <h3>🔹 Health Insurance Response Prediction</h3>

        <h4>📌 Overview</h4>
        <p>A machine learning model that predicts whether potential customers will purchase health insurance based on marketing campaign data. Achieved 76% accuracy in predicting customer responses, helping improve lead targeting and sales strategies.</p>

        <h4>🔍 Problem Statement</h4>
        <p>Insurance companies need to optimize their marketing efforts by identifying customers most likely to purchase health insurance, reducing resource wastage and improving conversion rates.</p>

        <h4>🛠️ Tools & Technologies</h4>
        <div class="tech-tags">
          <span>Python</span>
          <span>Pandas</span>
          <span>Scikit-learn</span>
          <span>Matplotlib</span>
          <span>Seaborn</span>
          <span>SVM</span>
        </div>

        <h4>⚙️ Approach</h4>
        <ul>
          <li><strong>Data Preprocessing:</strong>
            <ul>
              <li>Handled missing values and encoded features</li>
              <li>Scaled numerical features</li>
              <li>Dropped high-cardinality columns</li>
            </ul>
          </li>
          <li><strong>Model Development:</strong>
            <ul>
              <li>Implemented K-fold cross-validation</li>
              <li>Compared multiple models (SVM, Decision Tree, Random Forest)</li>
              <li>Selected SVM with linear kernel as final model</li>
            </ul>
          </li>
        </ul>

        <h4>📈 Results</h4>
        <ul>
          <li>Model Accuracy: 76%</li>
          <li>Identified key factors influencing insurance purchases</li>
          <li>Developed targeted marketing strategies for different customer segments</li>
        </ul>

        <div class="project-links">
          <a href="https://github.com/Ajayprasanna04/Health-Insurance-Response-Prediction" target="_blank" class="github-link">GitHub Repository</a>
        </div>`,
      "ecommerce": `
        <h3>🔹 E-Commerce Transaction Analysis</h3>

        <h4>📌 Overview</h4>
        <p>A comprehensive analysis of online shop sales data to uncover trends, customer behavior, product performance, and cancellation patterns. The project provides actionable insights to improve business strategies and optimize revenue.</p>

        <h4>🔍 Problem Statement</h4>
        <p>E-commerce businesses need to understand customer behavior, identify successful products, and optimize their operations. This analysis helps in making data-driven decisions for business growth.</p>

        <h4>🛠️ Tools & Technologies</h4>
        <div class="tech-tags">
          <span>Python</span>
          <span>Pandas</span>
          <span>Plotly</span>
          <span>Seaborn</span>
          <span>Matplotlib</span>
          <span>Scikit-learn</span>
        </div>

        <h4>⚙️ Approach</h4>
        <ul>
          <li><strong>Data Preprocessing:</strong>
            <ul>
              <li>Cleaned and transformed 18,237 unique transaction records</li>
              <li>Handled missing values and duplicates</li>
              <li>Created derived features for analysis</li>
            </ul>
          </li>
          <li><strong>Analysis:</strong>
            <ul>
              <li>Calculated key business metrics</li>
              <li>Analyzed product performance</li>
              <li>Studied customer purchase patterns</li>
              <li>Investigated cancellation trends</li>
            </ul>
          </li>
        </ul>

        <h4>📈 Results</h4>
        <ul>
          <li>Analyzed £52.25M in total revenue</li>
          <li>Identified top-performing products</li>
          <li>Created customer segmentation</li>
          <li>Developed cancellation reduction strategies</li>
        </ul>

        <div class="project-links">
          <a href="https://github.com/Ajayprasanna04/E-Commerce-Transaction-Analysis" target="_blank" class="github-link">GitHub Repository</a>
        </div>`,
    "realestate": `
      <h3>Real Estate Intelligence</h3>
      
      <h4>Purpose</h4>
      <p>To build a data-driven real estate intelligence system that helps identify profitable land deals, predict construction costs, estimate selling price & ROI, and minimize project risks through AI and machine learning models.</p>
      
      <h4>How It Boosts Real Estate Business</h4>
      <ul>
        <li><strong>Land Discovery:</strong> Aggregates leads from real estate sites, social media, and government portals using a smart monitoring system</li>
        <li><strong>Deal Evaluation:</strong> Predicts land value and opportunity score using legal rates, market prices, and amenities</li>
        <li><strong>Cost Forecasting:</strong> Uses historical project data to predict construction costs by type, material, and location</li>
        <li><strong>ROI & Pricing:</strong> Accurately estimates selling price and ROI by analyzing location, buyer segment, and property features</li>
        <li><strong>Risk Reduction:</strong> Classifies projects based on success probability and financial risk using regression and classification models</li>
        <li><strong>Smart Marketing:</strong> Scores and targets buyers based on income, location, and preferences — boosting conversion and revenue</li>
      </ul>

      <h4>Technologies (Planned)</h4>
      <div class="tech-tags">
        <span>Python</span>
        <span>TensorFlow</span>
        <span>Scikit-learn</span>
        <span>FastAPI</span>
        <span>PostgreSQL</span>
        <span>React</span>
        <span>Web Scraping</span>
        <span>GIS Integration</span>
      </div>

      <h4>Development Status</h4>
      <p>Project is in the planning and prototyping stage. Development will begin soon with modular ML model and Real time data integration.</p>

      <div class="project-links">
        <a href="https://docs.google.com/presentation/d/1jcoF05hb5tL1cyldlrkWJWWqwR90mc3c/edit?slide=id.p1#slide=id.p1" target="_blank" class="demo-link">View Presentation</a>
      </div>`
  };

  // Update content
  content.innerHTML = projects[name];

  // Show modal and add blur effect
  document.body.classList.add('modal-open');
  modalContainer.classList.add('active');
  dimBg.classList.add('active');
  modal.classList.add('active');

  // Add click outside listener
  dimBg.addEventListener('click', closeProject);
}

function closeProject(event) {
  if (event) event.stopPropagation();
  
  const modalContainer = document.getElementById('modalContainer');
  const modal = document.getElementById('projectModal');
  const dimBg = document.querySelector('.dim-background');

  // Remove modal and blur effect
  document.body.classList.remove('modal-open');
  modalContainer.classList.remove('active');
  dimBg.classList.remove('active');
  modal.classList.remove('active');

  // Remove click outside listener
  dimBg.removeEventListener('click', closeProject);
}

// Slider functionality
function slideProjects(direction) {
  const container = document.querySelector('#projects .scroll-container');
  const scrollAmount = container.clientWidth * 0.8;
  const targetScroll = container.scrollLeft + (direction === 'next' ? scrollAmount : -scrollAmount);
  
  container.scrollTo({
    left: targetScroll,
    behavior: 'smooth'
  });
  
  updateSliderButtons(container);
}

function slideIdeas(direction) {
  const container = document.querySelector('#ideas .scroll-container');
  const scrollAmount = container.clientWidth * 0.8;
  const targetScroll = container.scrollLeft + (direction === 'next' ? scrollAmount : -scrollAmount);
  
  container.scrollTo({
    left: targetScroll,
    behavior: 'smooth'
  });
  
  updateSliderButtons(container);
}

function updateSliderButtons(container) {
  const section = container.closest('section');
  const prevBtn = section.querySelector('.slider-btn.prev');
  const nextBtn = section.querySelector('.slider-btn.next');
  
  // Update button states
  if (prevBtn) {
    prevBtn.disabled = container.scrollLeft <= 0;
  }
  if (nextBtn) {
    nextBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth;
  }
}

// Initialize slider buttons state
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.scroll-container');
  containers.forEach(updateSliderButtons);
  
  // Add scroll event listeners
  containers.forEach(container => {
    container.addEventListener('scroll', () => updateSliderButtons(container));
  });
});

// Update slider buttons on window resize
window.addEventListener('resize', () => {
  const containers = document.querySelectorAll('.scroll-container');
  containers.forEach(updateSliderButtons);
});

// Remove all slider-related code
function updateSliderButtons(container) {
  // Empty function to prevent errors from existing event listeners
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
  const techBubbles = document.querySelectorAll('.tech-bubble');
  
  techBubbles.forEach(bubble => {
    // Add span for text content
    const text = bubble.textContent;
    bubble.textContent = '';
    bubble.innerHTML = `<span>${text}</span>`;
    
    // Add hover interaction
    bubble.addEventListener('mouseenter', () => {
      bubble.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    bubble.addEventListener('mouseleave', () => {
      bubble.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click effect
    bubble.addEventListener('click', () => {
      bubble.style.transform = 'translateY(0) scale(0.95)';
      setTimeout(() => {
        bubble.style.transform = 'translateY(-5px) scale(1.05)';
      }, 150);
    });
  });
});
