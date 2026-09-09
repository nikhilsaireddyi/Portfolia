import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime, n as Slot, t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { a as Copy, c as ArrowDown, i as Menu, o as ChevronDown, r as Send, s as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-EQrNB6Z8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var profile = {
	name: "Kiran Vale",
	initials: "KV",
	role: "CSE · AI & ML",
	location: "India",
	email: "hello@kiranvale.dev",
	availability: "Open to internships",
	focus: "Computer vision and applied NLP",
	tagline: "I train models, ship small systems, and write the notes in between.",
	summary: "Third-year computer science student specializing in artificial intelligence and machine learning. I like problems with a messy data story and a clear evaluation — classifiers that leave the notebook, retrieval that students actually use, forecasts that hold up outside the training split.",
	about: "Most weeks split between coursework, a computer-vision project, and helping juniors debug their first notebooks. I care more about the evaluation protocol than the architecture diagram, and I write things down so the next person (often me) can rerun them.",
	links: {
		github: "https://github.com",
		linkedin: "https://www.linkedin.com",
		email: "mailto:hello@kiranvale.dev"
	},
	education: {
		degree: "B.Tech, Computer Science Engineering (AI & ML)",
		years: "2023 — 2027",
		school: "Institute of Technology",
		coursework: [
			"Machine Learning",
			"Deep Learning",
			"Data Structures",
			"Probability & Statistics",
			"DBMS",
			"Computer Vision"
		]
	},
	now: [
		{
			label: "Building",
			value: "on-device plant disease classifier"
		},
		{
			label: "Reading",
			value: "Hands-On Machine Learning, 3rd ed."
		},
		{
			label: "Seeking",
			value: "Summer internship in applied ML"
		}
	]
};
var projects = [
	{
		id: "leafnet",
		number: "01",
		title: "LeafNet",
		year: "2025",
		blurb: "On-device plant disease classifier trained on PlantVillage.",
		problem: "Field identification of crop disease still depends on a specialist visit. Students and small farms needed something that runs without a GPU and without a network.",
		approach: "Fine-tuned a MobileNetV3 backbone in PyTorch on 38 PlantVillage classes, then quantized to INT8 for a 4.2 MB mobile build. Grad-CAM overlays show which lesions the model actually used.",
		result: "96.2% top-1 on a held-out test split. Confusion concentrated in visually similar blight pairs — documented, not hidden.",
		tags: [
			"PyTorch",
			"CNN",
			"OpenCV",
			"Quantization"
		],
		image: "/work/leafnet.jpg",
		href: "https://github.com"
	},
	{
		id: "campusrag",
		number: "02",
		title: "CampusRAG",
		year: "2025",
		blurb: "Retrieval-augmented chatbot over lecture notes and past papers.",
		problem: "Course material lived in a thousand PDFs. Searching by filename is not studying. Students needed answers with citations, not a hallucinated summary.",
		approach: "Chunked 1,200 lecture PDFs, embedded with sentence-transformers, retrieved via FAISS, and generated with a small open model behind FastAPI. Every answer carries source page links.",
		result: "Used by a pilot of 80 classmates during midterms. Citation click-through was the quality metric, not BLEU.",
		tags: [
			"RAG",
			"FAISS",
			"FastAPI",
			"NLP"
		],
		image: "/work/campusrag.jpg",
		href: "https://github.com"
	},
	{
		id: "pulseforecast",
		number: "03",
		title: "PulseForecast",
		year: "2024",
		blurb: "24-hour campus energy demand forecast with covariates.",
		problem: "The campus estate office planned HVAC on last week's average. Exam weeks and holidays made that average a bad prior.",
		approach: "Multivariate LSTM with calendar, weather, and occupancy covariates. Walk-forward validation, not a shuffled split. Streamlit dashboard for the estate team.",
		result: "11.4% MAPE on a 24h horizon versus 18.9% for the seasonal naive baseline.",
		tags: [
			"LSTM",
			"Time series",
			"Pandas",
			"Streamlit"
		],
		image: "/work/pulseforecast.jpg",
		href: "https://github.com"
	}
];
var skillGroups = [
	{
		label: "Languages",
		items: [
			"Python",
			"C++",
			"SQL",
			"JavaScript",
			"TypeScript"
		]
	},
	{
		label: "Machine learning",
		items: [
			"PyTorch",
			"scikit-learn",
			"OpenCV",
			"Hugging Face",
			"NumPy",
			"Pandas"
		]
	},
	{
		label: "Systems",
		items: [
			"Git",
			"FastAPI",
			"Streamlit",
			"Docker",
			"Linux",
			"PostgreSQL"
		]
	}
];
var nav = [
	{
		id: "about",
		label: "About",
		index: "01"
	},
	{
		id: "work",
		label: "Work",
		index: "02"
	},
	{
		id: "skills",
		label: "Skills",
		index: "03"
	},
	{
		id: "contact",
		label: "Contact",
		index: "04"
	}
];
function AboutSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "scroll-mt-16 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-kicker text-accent uppercase",
				children: "01 — About"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-10 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl tracking-tight text-fg sm:text-5xl",
						children: "A student of systems that learn"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 text-base leading-relaxed text-muted lg:col-span-8 lg:text-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-fg",
							children: profile.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: profile.about }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 pt-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl bg-surface p-5 hairline",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs tracking-wide text-subtle uppercase",
										children: "Education"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-lg font-medium text-fg",
										children: profile.education.degree
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: profile.education.school
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-xs text-subtle",
										children: profile.education.years
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl bg-surface p-5 hairline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs tracking-wide text-subtle uppercase",
									children: "Coursework"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 flex flex-wrap gap-2",
									children: profile.education.coursework.map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-full bg-raised px-2.5 py-1 text-sm text-fg",
										children: course
									}, course))
								})]
							})]
						})
					]
				})]
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:enabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-accent/90",
			outline: "bg-transparent text-fg hairline hairline-hover hover:bg-raised",
			ghost: "text-muted hover:bg-raised hover:text-fg",
			link: "text-accent underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 rounded-md px-4 pr-3.5",
			sm: "h-9 rounded-md px-3",
			lg: "h-12 rounded-lg px-5",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-raised px-3 py-2 text-base text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_10%,transparent)] transition-[box-shadow] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("font-mono text-xs tracking-wide text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full resize-y rounded-lg bg-raised px-3 py-3 text-base text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_10%,transparent)] transition-[box-shadow] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		...props
	});
}
function ContactSection() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [sending, setSending] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		if (!name.trim() || !email.trim() || !message.trim()) {
			toast.error("Fill in name, email, and a note.");
			return;
		}
		setSending(true);
		const body = `From: ${name} <${email}>\n\n${message}`;
		try {
			await navigator.clipboard.writeText(body);
			toast.success("Note copied. Opening your mail app.");
		} catch {
			toast.message("Opening your mail app.");
		}
		const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(`Hello ${profile.name.split(" ")[0]}`)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailto;
		setSending(false);
	}
	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(profile.email);
			toast.success("Email copied.");
		} catch {
			toast.error("Could not copy. Use the address beside this button.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-kicker text-accent uppercase",
				children: "04 — Contact"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-10 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl tracking-tight text-fg sm:text-5xl",
							children: profile.availability
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-muted",
							children: "Internships, research collaborations, or a question about one of the projects. I read everything."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: profile.links.email,
									className: "font-mono text-sm text-accent hover:underline",
									children: profile.email
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "ghost",
									size: "icon",
									className: "size-11",
									"aria-label": "Copy email",
									onClick: copyEmail,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: profile.links.github,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-11 items-center gap-1 text-muted hover:text-fg",
									children: ["GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: profile.links.linkedin,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-11 items-center gap-1 text-muted hover:text-fg",
									children: ["LinkedIn", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "flex flex-col gap-5 rounded-xl bg-surface p-5 hairline sm:p-6 lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									autoComplete: "name",
									placeholder: "Your name",
									value: name,
									onChange: (e) => setName(e.target.value),
									required: true
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									name: "email",
									type: "email",
									autoComplete: "email",
									placeholder: "you@college.edu",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									required: true
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "message",
								children: "Note"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								name: "message",
								placeholder: "What should we talk about?",
								value: message,
								onChange: (e) => setMessage(e.target.value),
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								disabled: sending,
								className: "min-w-36",
								children: ["Send note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {})]
							})
						})
					]
				})]
			})]
		})
	});
}
function NodeField({ className }) {
	const nodes = [
		[40, 60],
		[120, 36],
		[200, 72],
		[280, 28],
		[340, 90],
		[80, 150],
		[170, 170],
		[260, 140],
		[320, 190],
		[50, 240],
		[140, 260],
		[230, 230],
		[310, 270],
		[90, 330],
		[190, 320],
		[280, 340]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 380 380",
		className,
		"aria-hidden": "true",
		fill: "none",
		children: [[
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
			[0, 5],
			[1, 6],
			[2, 6],
			[2, 7],
			[4, 8],
			[5, 6],
			[6, 7],
			[7, 8],
			[5, 9],
			[6, 10],
			[7, 11],
			[8, 12],
			[9, 10],
			[10, 11],
			[11, 12],
			[9, 13],
			[10, 14],
			[11, 14],
			[12, 15],
			[13, 14],
			[14, 15]
		].map(([a, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: nodes[a][0],
			y1: nodes[a][1],
			x2: nodes[b][0],
			y2: nodes[b][1],
			stroke: "currentColor",
			strokeWidth: "1",
			opacity: "0.35"
		}, i)), nodes.map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: x,
			cy: y,
			r: i % 5 === 0 ? 4.5 : 2.75,
			fill: "currentColor",
			opacity: i % 5 === 0 ? .9 : .55
		}, i))]
	});
}
function scrollToId$1(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "intro",
		className: "relative grid-paper overflow-hidden border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 text-accent/40 lg:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeField, { className: "absolute top-1/2 right-8 h-[min(520px,70vh)] w-auto -translate-y-1/2" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rise rise-1 font-mono text-xs tracking-kicker text-accent uppercase",
					children: [
						profile.role,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2 text-subtle",
							children: "/"
						}),
						profile.location
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "rise rise-2 mt-5 max-w-3xl font-display text-5xl leading-display tracking-tight text-fg sm:text-6xl lg:text-7xl",
					children: profile.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl",
					children: profile.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rise rise-4 mt-8 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => scrollToId$1("work"),
						className: "min-w-36",
						children: ["View work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: profile.links.github,
							target: "_blank",
							rel: "noreferrer",
							children: ["GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "rise rise-5 mt-16 grid max-w-2xl gap-6 border-t border-border pt-8 sm:grid-cols-3",
					children: profile.now.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-mono text-xs tracking-wide text-subtle uppercase",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1.5 text-sm leading-snug text-fg",
						children: item.value
					})] }, item.label))
				})
			]
		})]
	});
}
function SectionRail({ active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Section index",
		className: "pointer-events-none fixed top-1/2 left-6 z-30 hidden -translate-y-1/2 lg:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "pointer-events-auto flex flex-col gap-3",
			children: nav.map((item) => {
				const isActive = active === item.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${item.id}`,
					onClick: (e) => {
						e.preventDefault();
						document.getElementById(item.id)?.scrollIntoView({
							behavior: "smooth",
							block: "start"
						});
					},
					className: cn("group flex items-center gap-3 font-mono text-xs tracking-wide transition-colors duration-150", isActive ? "text-accent" : "text-subtle hover:text-muted"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-px w-4 transition-[width,background-color] duration-200", isActive ? "w-8 bg-accent" : "bg-border group-hover:bg-muted") }), item.index]
				}) }, item.id);
			})
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs tracking-wide text-subtle",
				children: [
					profile.name,
					" · ",
					profile.role
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-subtle",
				children: "Sample structure for a CSE AI/ML student portfolio."
			})]
		})
	});
}
function scrollToId(id) {
	const el = document.getElementById(id);
	if (!el) return;
	el.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function SiteHeader({ active }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#intro",
					onClick: (e) => {
						e.preventDefault();
						scrollToId("intro");
						setOpen(false);
					},
					className: "flex items-center gap-3 text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-8 items-center justify-center rounded-md bg-raised font-display text-sm text-accent hairline",
						children: profile.initials
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium tracking-tight",
						children: profile.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Primary",
					children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${item.id}`,
						onClick: (e) => {
							e.preventDefault();
							scrollToId(item.id);
						},
						className: cn("rounded-md px-3 py-2 text-sm transition-colors duration-150", active === item.id ? "text-fg" : "text-muted hover:text-fg"),
						children: item.label
					}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "ml-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							onClick: (e) => {
								e.preventDefault();
								scrollToId("contact");
							},
							children: "Get in touch"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					className: "md:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid overflow-hidden border-t border-border transition-[grid-template-rows,opacity] duration-200 ease-out-smooth md:hidden", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "min-h-0 bg-bg",
				"aria-label": "Mobile",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col px-4 py-3",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${item.id}`,
						onClick: (e) => {
							e.preventDefault();
							setOpen(false);
							scrollToId(item.id);
						},
						className: cn("flex min-h-11 items-center justify-between rounded-md px-2 text-base", active === item.id ? "text-fg" : "text-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-subtle",
							children: item.index
						})]
					}, item.id))
				})
			})
		})]
	});
}
function SkillsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "scroll-mt-16 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-kicker text-accent uppercase",
					children: "03 — Toolkit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-xl font-display text-4xl tracking-tight text-fg sm:text-5xl",
					children: "What I reach for"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 md:grid-cols-3",
					children: skillGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-5 hairline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-mono text-xs tracking-wide text-subtle uppercase",
							children: group.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex flex-col",
							children: group.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: cn("flex items-center justify-between py-2.5 text-fg", i !== group.items.length - 1 && "border-b border-border"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-subtle",
									children: String(i + 1).padStart(2, "0")
								})]
							}, item))
						})]
					}, group.label))
				})
			]
		})
	});
}
function Badge({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full bg-raised px-2.5 py-1 font-mono text-xs tracking-wide text-muted", className),
		children
	});
}
function ProjectCard({ project, open, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "overflow-hidden rounded-xl bg-surface hairline hairline-hover transition-[box-shadow] duration-150",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onToggle,
			"aria-expanded": open,
			className: "grid w-full text-left md:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-video overflow-hidden bg-raised md:col-span-2 md:aspect-auto md:min-h-56",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: "",
					className: "size-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 left-3 font-mono text-xs text-fg/90",
					children: project.number
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between p-5 md:col-span-3 md:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl tracking-tight text-fg",
							children: project.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-subtle",
							children: project.year
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-prose text-muted",
						children: project.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-2",
						children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: tag }) }, tag))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center justify-between text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: open ? "Hide notes" : "Read notes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition-transform duration-200", open && "rotate-180") })]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid transition-[grid-template-rows,opacity] duration-200 ease-out-smooth", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 overflow-hidden",
				inert: !open,
				"aria-hidden": !open,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 border-t border-border px-5 py-6 md:grid-cols-3 md:px-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-mono text-xs tracking-wide text-subtle uppercase",
							children: "Problem"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: project.problem
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-mono text-xs tracking-wide text-subtle uppercase",
							children: "Approach"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: project.approach
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-mono text-xs tracking-wide text-subtle uppercase",
								children: "Result"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: project.result
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.href,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm text-accent hover:underline",
								onClick: (e) => e.stopPropagation(),
								children: ["Source", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							})
						] })
					]
				})
			})
		})]
	});
}
function WorkSection() {
	const [openId, setOpenId] = (0, import_react.useState)(projects[0]?.id ?? null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "scroll-mt-16 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-kicker text-accent uppercase",
						children: "02 — Selected work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl tracking-tight text-fg sm:text-5xl",
						children: "Three projects, three evaluation stories"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Vision, retrieval, and time series. Each one ships with a protocol, not just an architecture."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 flex flex-col gap-5",
				children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
					project,
					open: openId === project.id,
					onToggle: () => setOpenId((current) => current === project.id ? null : project.id)
				}, project.id))
			})]
		})
	});
}
function useActiveSection() {
	const [active, setActive] = (0, import_react.useState)(nav[0].id);
	(0, import_react.useEffect)(() => {
		const ids = nav.map((item) => item.id);
		const observer = new IntersectionObserver((entries) => {
			const top = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (top?.target.id) setActive(top.target.id);
		}, {
			rootMargin: "-30% 0px -45% 0px",
			threshold: [
				0,
				.25,
				.5
			]
		});
		for (const id of ids) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}
		return () => observer.disconnect();
	}, []);
	return active;
}
function Home() {
	const active = useActiveSection();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#about",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { active }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionRail, { active }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "bottom-right",
				toastOptions: { className: "font-sans" }
			})
		]
	});
}
//#endregion
export { Home as component };
