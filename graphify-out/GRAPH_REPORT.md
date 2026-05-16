# Graph Report - reggiealleyne  (2026-05-13)

## Corpus Check
- 297 files · ~3,083,303 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1132 nodes · 1881 edges · 113 communities (91 shown, 22 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `76f2f618`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 79|Community 79]]
- [[_COMMUNITY_Community 80|Community 80]]
- [[_COMMUNITY_Community 81|Community 81]]
- [[_COMMUNITY_Community 82|Community 82]]
- [[_COMMUNITY_Community 83|Community 83]]
- [[_COMMUNITY_Community 84|Community 84]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 77 edges
2. `ProjectType` - 29 edges
3. `EditorialSection()` - 22 edges
4. `Card` - 16 edges
5. `CardContent` - 16 edges
6. `CaseStudyFrame()` - 15 edges
7. `CaseStudyFooter()` - 14 edges
8. `ProjectLightboxModal()` - 12 edges
9. `doggyDateData` - 9 edges
10. `techNoirData` - 9 edges

## Surprising Connections (you probably didn't know these)
- `AlertDialogHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `SheetHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/sheet.tsx → src/lib/utils.ts
- `SheetFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/sheet.tsx → src/lib/utils.ts
- `DrawerHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/drawer.tsx → src/lib/utils.ts

## Communities (113 total, 22 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (49): getAllProjects(), getProject(), getProjectById(), getAllPredefinedProjects(), getPredefinedProjectById(), getPredefinedProjectBySlug(), isPredefinedProject(), isPredefinedProjectSlug() (+41 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (32): getCanonicalProjectRouteSlug(), getProjectCanonicalUrl(), getProjectPath(), getProjectRouteSegment(), projectRouteAliases, BobsBigBreakCaseStudy, caseStudySlugs, ChillVibesCaseStudy (+24 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (16): SitemapItem, SitemapWireframesProps, WireframeImage, symptomCheckrAIPMData, symptomCheckrChallengesData, symptomCheckrIdeationData, symptomCheckrJourneyData, symptomCheckrOutcomesData (+8 more)

### Community 3 - "Community 3"
Cohesion: 0.05
Nodes (38): BentoProjectsGridProps, useIsMobile(), Separator, SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader() (+30 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (15): DesignOpportunity, EmotionalState, JourneyStage, PainPoint, UserAction, PersonaDetail, PersonaItem, PersonaListProps (+7 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (26): ContactMailtoInput, createContactMailtoHref(), isTurnstileConfigured, TURNSTILE_SITE_KEY, TurnstileApi, TurnstileProps, TurnstileRenderOptions, TurnstileTheme (+18 more)

### Community 6 - "Community 6"
Cohesion: 0.09
Nodes (11): FinalUIDesignProps, cllctveChallengesData, cllctveIdeationData, cllctveOverviewData, cllctveProblemSpaceData, cllctveReflectionData, cllctveResearchData, cllctveSitemapData (+3 more)

### Community 7 - "Community 7"
Cohesion: 0.11
Nodes (20): AIProductThinkingProps, DecisionLedgerItem, DecisionLedgerProps, LedgerDetailProps, DesignHighlight, FinalUIDesignProps, UIFeature, UIImage (+12 more)

### Community 8 - "Community 8"
Cohesion: 0.12
Nodes (5): doggyDateData, FinalUIDesignProps, Achievement, MetricItem, OutcomesImpactProps

### Community 9 - "Community 9"
Cohesion: 0.09
Nodes (16): Challenge, ChallengesLearningsProps, Learning, NextStep, ReflectionGroupProps, UserJourneyMapProps, UserPersonaProps, tutorDChallengesData (+8 more)

### Community 10 - "Community 10"
Cohesion: 0.11
Nodes (12): wristbandChallengesData, wristbandIdeationData, wristbandJourneyData, wristbandOverviewData, wristbandPersonaData, wristbandProblemSpaceData, wristbandResearchData, Challenge (+4 more)

### Community 11 - "Community 11"
Cohesion: 0.09
Nodes (13): Avatar, AvatarFallback, AvatarImage, Checkbox, HoverCardContent, PopoverContent, Progress, RadioGroup (+5 more)

### Community 12 - "Community 12"
Cohesion: 0.15
Nodes (14): FlowStep, IdeationStrategyProps, KeyInsight, KeyFinding, ResearchDiscoveryProps, ResearchSection, scentStackChallengesData, scentStackIdeationData (+6 more)

### Community 13 - "Community 13"
Cohesion: 0.11
Nodes (14): allowedOrigins, configuredAllowedOrigins, contactRequestSchema, contactSchema, corsHeaders, DEFAULT_ALLOWED_ORIGINS, origin, resend (+6 more)

### Community 14 - "Community 14"
Cohesion: 0.19
Nodes (14): useToast(), ContactModal(), ContactModalProps, ContactCard(), ContactFormData, services, ServicesDialogProps, DialogContent (+6 more)

### Community 16 - "Community 16"
Cohesion: 0.19
Nodes (15): cn(), ButtonProps, buttonVariants, Calendar(), CalendarProps, Pagination(), PaginationContent, PaginationEllipsis() (+7 more)

### Community 17 - "Community 17"
Cohesion: 0.12
Nodes (11): CLLCTVE_PROJECT_ROUTE_ALIASES, About, Index, Playground, Project, queryClient, Works, root (+3 more)

### Community 18 - "Community 18"
Cohesion: 0.14
Nodes (7): improvLearningFinalDesignData, improvLearningOutcomesData, improvLearningOverviewData, improvLearningProblemSpaceData, improvLearningReflectionData, improvLearningResearchData, FinalUIDesignProps

### Community 19 - "Community 19"
Cohesion: 0.19
Nodes (13): Insight, ReflectionProps, litmusAIAIPMData, litmusAIChallengesData, litmusAIIdeationData, litmusAIOutcomesData, litmusAIOverviewData, litmusAIProblemSpaceData (+5 more)

### Community 20 - "Community 20"
Cohesion: 0.12
Nodes (3): FinalGameplayProps, TechnicalImplementationProps, CaseStudyFrame()

### Community 21 - "Community 21"
Cohesion: 0.14
Nodes (14): CaseStudyBrief, caseStudyBriefs, CaseStudyTldr, caseStudyTldrs, FeaturedProjectConfig, FeaturedProjectSlug, featuredProjectSlugs, hiddenFromPrimaryWorksIds (+6 more)

### Community 22 - "Community 22"
Cohesion: 0.17
Nodes (7): ProjectDetailsTabProps, ProjectDetailsTabsProps, ProjectOverviewTabProps, ProjectSolutionTabProps, TabsContent, TabsList, TabsTrigger

### Community 23 - "Community 23"
Cohesion: 0.18
Nodes (13): Action, ActionType, actionTypes, addToRemoveQueue(), dispatch(), genId(), listeners, memoryState (+5 more)

### Community 24 - "Community 24"
Cohesion: 0.13
Nodes (13): Button, Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext (+5 more)

### Community 25 - "Community 25"
Cohesion: 0.23
Nodes (10): MetricItem, OutcomesImpactProps, vaultjsChallengesData, vaultjsIdeationData, vaultjsOutcomesData, vaultjsOverviewData, vaultjsProblemSpaceData, vaultjsReflectionData (+2 more)

### Community 26 - "Community 26"
Cohesion: 0.14
Nodes (6): fitSignals, heroProofPoints, projectSignals, capabilities, domainSignals, processSteps

### Community 28 - "Community 28"
Cohesion: 0.17
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 29 - "Community 29"
Cohesion: 0.27
Nodes (6): isFeaturedProject(), isPrimaryWorksProject(), orderFeaturedProjects(), sortProjectsNewestFirst(), FeaturedProjectsSection(), Works()

### Community 30 - "Community 30"
Cohesion: 0.27
Nodes (9): getCaseStudyBrief(), getCaseStudyTldr(), getFeaturedConfig(), getProjectLiveLabel(), compactItems(), getReviewerLinks(), ReviewerSnapshot(), ReviewerSnapshotProps (+1 more)

### Community 31 - "Community 31"
Cohesion: 0.27
Nodes (9): Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle, toastVariants (+1 more)

### Community 32 - "Community 32"
Cohesion: 0.18
Nodes (9): Command, CommandDialogProps, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator (+1 more)

### Community 33 - "Community 33"
Cohesion: 0.18
Nodes (7): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, THEMES

### Community 35 - "Community 35"
Cohesion: 0.2
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 36 - "Community 36"
Cohesion: 0.2
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 37 - "Community 37"
Cohesion: 0.22
Nodes (3): improvLearningChallengesData, improvLearningIdeationData, CaseStudyFooter()

### Community 38 - "Community 38"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 39 - "Community 39"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 40 - "Community 40"
Cohesion: 0.22
Nodes (3): DirectUIImagesProps, TechnicalImplementationProps, Card

### Community 41 - "Community 41"
Cohesion: 0.25
Nodes (7): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 42 - "Community 42"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 43 - "Community 43"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 44 - "Community 44"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 45 - "Community 45"
Cohesion: 0.25
Nodes (6): DesignOpportunity, EmotionalState, JourneyStage, PainPoint, UserAction, UserJourneyMapProps

### Community 46 - "Community 46"
Cohesion: 0.25
Nodes (5): CardDescription, CardFooter, CardHeader, CardTitle, TechnicalImplementationProps

### Community 48 - "Community 48"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 49 - "Community 49"
Cohesion: 0.29
Nodes (4): DetailGroupProps, ProjectDetail, ProjectOverviewProps, ToolDetail

### Community 50 - "Community 50"
Cohesion: 0.29
Nodes (4): Challenge, DesignGoal, ProblemColumnProps, ProblemSpaceProps

### Community 51 - "Community 51"
Cohesion: 0.29
Nodes (3): DirectUIImagesProps, ReflectionProps, CardContent

### Community 52 - "Community 52"
Cohesion: 0.29
Nodes (5): Achievement, DetailedImpact, KeyAction, KeyResult, OutcomesImpactData

### Community 53 - "Community 53"
Cohesion: 0.33
Nodes (4): mobilePrimaryLinks, mobileSecondaryLinks, NavLinkItem, navLinks

### Community 54 - "Community 54"
Cohesion: 0.33
Nodes (4): PersonaDetail, PersonaItem, PersonaSection, UserPersonaProps

### Community 55 - "Community 55"
Cohesion: 0.4
Nodes (3): DirectUIImagesProps, flowSteps, images

### Community 56 - "Community 56"
Cohesion: 0.4
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 57 - "Community 57"
Cohesion: 0.4
Nodes (4): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 58 - "Community 58"
Cohesion: 0.4
Nodes (3): applicationSignals, education, EducationItem

### Community 59 - "Community 59"
Cohesion: 0.4
Nodes (3): ProjectDetail, ProjectOverviewProps, ToolDetail

### Community 60 - "Community 60"
Cohesion: 0.4
Nodes (3): ResearchDiscoveryProps, ResearchInsight, ResearchMethod

### Community 61 - "Community 61"
Cohesion: 0.4
Nodes (3): SitemapItem, SitemapWireframesProps, WireframeImage

### Community 62 - "Community 62"
Cohesion: 0.5
Nodes (3): APP_SHELL_URLS, requestUrl, responseClone

### Community 64 - "Community 64"
Cohesion: 0.67
Nodes (3): Badge(), BadgeProps, badgeVariants

### Community 65 - "Community 65"
Cohesion: 0.5
Nodes (3): AccordionContent, AccordionItem, AccordionTrigger

### Community 72 - "Community 72"
Cohesion: 0.5
Nodes (3): code:block1 (# Step 1: Clone the repository using the project's Git URL.), Project info, What technologies are used for this project?

## Knowledge Gaps
- **404 isolated node(s):** `DEFAULT_ALLOWED_ORIGINS`, `configuredAllowedOrigins`, `allowedOrigins`, `contactSchema`, `contactRequestSchema` (+399 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 16` to `Community 0`, `Community 3`, `Community 5`, `Community 7`, `Community 11`, `Community 14`, `Community 20`, `Community 22`, `Community 24`, `Community 28`, `Community 31`, `Community 32`, `Community 33`, `Community 35`, `Community 36`, `Community 38`, `Community 39`, `Community 41`, `Community 42`, `Community 43`, `Community 44`, `Community 46`, `Community 48`, `Community 56`, `Community 57`, `Community 63`, `Community 64`, `Community 65`?**
  _High betweenness centrality (0.329) - this node is a cross-community bridge._
- **Why does `EditorialSection()` connect `Community 7` to `Community 1`, `Community 4`, `Community 8`, `Community 9`, `Community 10`, `Community 12`, `Community 16`, `Community 49`, `Community 50`, `Community 19`, `Community 55`, `Community 25`, `Community 30`, `Community 63`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Why does `CaseStudyFrame()` connect `Community 20` to `Community 2`, `Community 4`, `Community 37`, `Community 6`, `Community 7`, `Community 8`, `Community 10`, `Community 12`, `Community 15`, `Community 16`, `Community 19`, `Community 25`, `Community 27`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **What connects `DEFAULT_ALLOWED_ORIGINS`, `configuredAllowedOrigins`, `allowedOrigins` to the rest of the system?**
  _404 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._