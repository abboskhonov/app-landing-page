

const testimonials = [
  { name: "Alice Johnson", role: "Freelance Designer", text: "Cal AI has revolutionized how I manage my time. It's like having a personal assistant.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
  { name: "Bob Brown", role: "Project Manager, Tech Innovations", text: "The AI-powered scheduling has significantly reduced conflicts in our team's calendar.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
  { name: "Charlie Davis", role: "Entrepreneur", text: "The smart time blocking feature has helped me maintain a better work-life balance.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { name: "Diana Evans", role: "Marketing Director", text: "Cal AI's predictive planning has made my workweek so much more efficient.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
  { name: "Ethan Ford", role: "Software Team Lead", text: "The team collaboration features have streamlined our project management process.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
  { name: "Fiona Grant", role: "HR Manager", text: "Cal AI has helped me balance my work and personal commitments effortlessly.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" },
  { name: "George Harris", role: "Productivity Coach", text: "The AI-driven insights have helped me optimize my daily routines significantly.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
  { name: "Hannah Irving", role: "Digital Nomad", text: "Cal AI's integration with my other tools has created a seamless workflow.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" },
  { name: "Ian Johnson", role: "Sales Executive", text: "The smart reminders have drastically reduced my missed appointments.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { name: "Julia Kim", role: "Researcher", text: "Cal AI's ability to learn my preferences has made scheduling a breeze.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face" },
  { name: "Kevin Lee", role: "Operations Manager", text: "The AI-suggested meeting times have improved our team's productivity.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
  { name: "Laura Martinez", role: "Urban Planner", text: "Cal AI's travel time estimations have made my commute planning much easier.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" },
  { name: "Michael Nelson", role: "Entrepreneur", text: "The AI-powered task prioritization has helped me focus on what's truly important.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
  { name: "Natalie Owens", role: "Personal Trainer", text: "Cal AI's habit tracking feature has helped me build better routines.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" },
  { name: "Oscar Parker", role: "Remote Worker", text: "The AI suggestions for breaks have improved my work-from-home productivity.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { name: "Patricia Quinn", role: "Tech Enthusiast", text: "Cal AI's integration with my smart home devices has streamlined my mornings.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face" },
  { name: "Quincy Roberts", role: "Productivity Consultant", text: "The AI-driven energy level tracking has helped me schedule tasks more effectively.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
  { name: "Rachel Stevens", role: "Life Coach", text: "Cal AI's goal-setting features have kept me accountable and on track.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" },
  { name: "Samuel Thompson", role: "Writer", text: "The AI-suggested focus times have dramatically improved my deep work sessions.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
  { name: "Tina Upton", role: "Global Project Coordinator", text: "Cal AI's team availability feature has made cross-timezone scheduling effortless.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" },
  { name: "Ulysses Vaughn", role: "Executive Assistant", text: "The AI-powered meeting summarizer has saved me hours of note-taking.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { name: "Victoria White", role: "Business Analyst", text: "Cal AI's personalized productivity insights have been eye-opening.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face" },
  { name: "William Xavier", role: "Startup Founder", text: "The AI-suggested networking opportunities have expanded my professional circle.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
  { name: "Xena Yates", role: "Wellness Coach", text: "Cal AI's integration with my fitness tracker has helped me maintain a healthier lifestyle.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" },
  { name: "Yannick Zimmerman", role: "Project Manager", text: "The AI-driven project timeline suggestions have kept our team ahead of deadlines.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
]

export function Testimonials() {
  return (
    <section id="testimonials">
      <div className="sm:py-20 py-12 container px-6 sm:px-10 mx-auto">
        <div className="text-center space-y-4 pb-10 mx-auto">
          <h2 className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase">
            Testimonials
          </h2>
          <h3 className="mx-0 mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase">
            What our users say
          </h3>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 py-10">
          {testimonials.map((t) => (
            <div key={t.name} className="break-inside-avoid">
              <div className="bg-muted/60 overflow-hidden rounded-3xl flex flex-col h-fit">
                <div className="px-4 py-5 sm:p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={t.img}
                      alt={t.name}
                    />
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-foreground">
                        {t.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground">{t.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
