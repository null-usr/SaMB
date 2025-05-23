import { useEffect, useRef, useState } from 'react'

const FadeInUp = ({ children, delay = 0 }) => {
	const ref = useRef(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.unobserve(entry.target) // stop observing after animation
				}
			},
			{ threshold: 0.50 }, // when 50% is visible
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<div
			ref={ref}
			className={`fade-in-up ${isVisible ? 'show' : ''}`}
			style={{ transitionDelay: `${delay}s` }}
		>
			{children}
		</div>
	)
}

export default FadeInUp
