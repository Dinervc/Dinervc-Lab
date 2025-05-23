<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import careerData from '../assets/career-path.json'

const sortOrder = ref('newest') // 'newest' or 'oldest'
const milestones = ref(careerData)
const pathAnimated = ref(false)

const sortedMilestones = computed(() => {
  const sorted = [...milestones.value]
  return sortOrder.value === 'newest'
    ? sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
})

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'newest' ? 'oldest' : 'newest'
  // Reset animation state when toggling
  pathAnimated.value = false
  setTimeout(() => {
    pathAnimated.value = true
  }, 100)
}

// Generate controlled offset for each milestone to create better snake pattern
const getOffset = (index: number) => {
  // Alternate between left and right sides with controlled distance
  const direction = index % 2 === 0 ? 1 : -1
  // Fixed offset to prevent overflow
  const offset = 40
  return offset * direction
}

onMounted(() => {
  // Add Material Icons link if not already present
  if (!document.querySelector('link[href*="material-icons"]')) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons'
    document.head.appendChild(link)
  }

  // Animation for path elements when they come into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  )

  document.querySelectorAll('.milestone').forEach((milestone) => {
    observer.observe(milestone)
  })

  // Trigger path animation after a short delay
  setTimeout(() => {
    pathAnimated.value = true
  }, 500)
})
</script>

<template>
  <div class="career-path-container">
    <div class="sort-toggle">
      <button @click="toggleSortOrder" class="toggle-btn">
        <span class="material-icons">{{
          sortOrder === 'newest' ? 'arrow_upward' : 'arrow_downward'
        }}</span>
        {{ sortOrder === 'newest' ? 'Show Oldest First' : 'Show Newest First' }}
      </button>
    </div>

    <div class="path-container">
      <div class="path-line" :class="{ animated: pathAnimated }"></div>

      <div
        v-for="(milestone, index) in sortedMilestones"
        :key="milestone.id"
        class="milestone"
        :class="{ left: index % 2 === 0, right: index % 2 !== 0 }"
        :style="{
          '--offset': `${getOffset(index)}px`,
          '--milestone-color': milestone.color,
          '--animation-delay': `${index * 0.2}s`
        }"
      >
        <div class="milestone-dot"></div>
        <div class="milestone-content">
          <div class="milestone-icon">
            <div class="icon-circle" :style="{ backgroundColor: milestone.color }">
              <span class="material-icons">{{ milestone.icon }}</span>
            </div>
          </div>
          <div class="milestone-info">
            <h3>{{ milestone.title }}</h3>
            <div class="milestone-date">
              {{
                new Date(milestone.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long'
                })
              }}
            </div>
            <p>{{ milestone.description }}</p>
          </div>
        </div>
        <div
          class="connector-line"
          :class="{ 'left-connector': index % 2 === 0, 'right-connector': index % 2 !== 0 }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.career-path-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  overflow-x: hidden;
}

.sort-toggle {
  text-align: center;
  margin-bottom: 40px;
}

.toggle-btn {
  background: linear-gradient(-45deg, #414141, #756b6b, #4b5051, #3e4341);
  background-size: 400% 400%;
  animation: gradient 8s ease infinite;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 auto;
}

.toggle-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.toggle-btn .material-icons {
  font-size: 18px;
}

.path-container {
  position: relative;
  padding: 20px 0;
  min-height: 500px;
  width: 100%;
}

.path-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: linear-gradient(to bottom, #3a5338, #1a2318);
  transform: translateX(-50%);
  z-index: 1;
  height: 0;
  transition: height 1.5s ease;
}

.path-line.animated {
  height: 100%;
}

.milestone {
  position: relative;
  margin: 100px 0;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
  transition-delay: var(--animation-delay);
  width: 100%;
}

.milestone.visible {
  opacity: 1;
  transform: translateY(0);
}

.milestone-dot {
  position: absolute;
  top: 20px;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: var(--milestone-color);
  border-radius: 50%;
  transform: translateX(-50%) scale(0);
  z-index: 2;
  box-shadow: 0 0 0 4px rgba(58, 83, 56, 0.3);
  transition: transform 0.5s ease;
  transition-delay: calc(var(--animation-delay) + 0.3s);
}

.milestone.visible .milestone-dot {
  transform: translateX(-50%) scale(1);
}

.milestone-content {
  position: relative;
  width: 42%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform: translateX(var(--offset));
  transition:
    transform 0.5s ease,
    box-shadow 0.3s ease;
}

.milestone-content:hover {
  transform: translateX(var(--offset)) scale(1.03);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.milestone.left .milestone-content {
  margin-left: auto;
  margin-right: 60px;
}

.milestone.right .milestone-content {
  margin-left: 60px;
}

.milestone-icon {
  position: absolute;
  top: -15px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.milestone.left .milestone-icon {
  right: -25px;
}

.milestone.right .milestone-icon {
  left: -25px;
}

.icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(0);
  transition: transform 0.5s ease;
  transition-delay: calc(var(--animation-delay) + 0.4s);
}

.milestone.visible .icon-circle {
  transform: scale(1);
}

.milestone-info h3 {
  margin-top: 0;
  color: var(--milestone-color);
  font-size: 22px;
}

.milestone-date {
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
}

.connector-line {
  position: absolute;
  top: 20px;
  height: 4px;
  background-color: var(--milestone-color);
  z-index: 1;
  width: 0;
  transition: width 0.8s ease;
  transition-delay: calc(var(--animation-delay) + 0.5s);
}

.milestone.visible .connector-line {
  width: 100%;
}

.left-connector {
  right: 48%;
  left: 50%;
  transform: translateX(-2px);
}

.right-connector {
  left: 48%;
  right: 50%;
  transform: translateX(2px);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(58, 83, 56, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(58, 83, 56, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(58, 83, 56, 0);
  }
}

.milestone.visible .milestone-dot {
  animation: pulse 2s infinite;
}

/* Responsive design */
@media (max-width: 768px) {
  .milestone-content {
    width: 80%;
    transform: none !important;
  }

  .milestone.left .milestone-content,
  .milestone.right .milestone-content {
    margin-left: auto;
    margin-right: auto;
  }

  .path-line {
    left: 20px;
  }

  .milestone-dot {
    left: 20px;
  }

  .connector-line {
    display: none;
  }

  .milestone-icon {
    top: -15px;
    left: -15px !important;
    right: auto !important;
  }
}
</style>
