export const fadeUp = {
  initial: { 
    y: 16, 
    opacity: 0 
  },
  whileInView: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  viewport: { 
    once: true, 
    margin: "-50px" 
  }
}

export const fadeIn = {
  initial: { 
    opacity: 0 
  },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  viewport: { 
    once: true 
  }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.06
    }
  }
}

export const slideIn = {
  initial: { 
    x: -8, 
    opacity: 0 
  },
  whileInView: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  viewport: { 
    once: true 
  }
}

export const scaleOnHover = {
  initial: { 
    scale: 1 
  },
  whileHover: { 
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
}

export const parallaxVariants = {
  initial: { 
    y: 16, 
    opacity: 0 
  },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

