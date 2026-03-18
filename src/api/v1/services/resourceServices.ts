export interface Resource {
  id: number;
  title: string;
  type: "article" | "video" | "tutorial" | "documentation";
  url: string;
  description: string;
  createdAt: string;
}

type CreateResourceInput = {
  title: string;
  type: "article" | "video" | "tutorial" | "documentation";
  url: string;
  description?: string;
};

type UpdateResourceInput = Partial<CreateResourceInput>;

let resources: Resource[] = [
  {
    id: 1,
    title: "Express.js Guide",
    type: "documentation",
    url: "https://expressjs.com/en/guide",
    description: "Official Express.js documentation",
    createdAt: new Date("2025-02-20T10:00:00.000Z").toISOString()
  },
  {
    id: 2,
    title: "TypeScript Basics",
    type: "video",
    url: "https://example.com/ts-basics",
    description: "Introduction to TypeScript",
    createdAt: new Date("2025-02-20T10:05:00.000Z").toISOString()
  },
  {
    id: 3,
    title: "REST API Design",
    type: "article",
    url: "https://example.com/rest-design",
    description: "Best practices for REST API design",
    createdAt: new Date("2025-02-20T10:10:00.000Z").toISOString()
  },
  {
    id: 4,
    title: "Jest Testing Tutorial",
    type: "tutorial",
    url: "https://example.com/jest-tutorial",
    description: "Complete guide to testing with Jest",
    createdAt: new Date("2025-02-20T10:15:00.000Z").toISOString()
  }
];


/**
 * Helper for tests so each test can start with clean sample data.
 */
export const resetResources = (): void => {
  resources = [
    {
      id: 1,
      title: "Express.js Guide",
      type: "documentation",
      url: "https://expressjs.com/en/guide",
      description: "Official Express.js documentation",
      createdAt: new Date("2025-02-20T10:00:00.000Z").toISOString()
    },
    {
      id: 2,
      title: "TypeScript Basics",
      type: "video",
      url: "https://example.com/ts-basics",
      description: "Introduction to TypeScript",
      createdAt: new Date("2025-02-20T10:05:00.000Z").toISOString()
    },
    {
      id: 3,
      title: "REST API Design",
      type: "article",
      url: "https://example.com/rest-design",
      description: "Best practices for REST API design",
      createdAt: new Date("2025-02-20T10:10:00.000Z").toISOString()
    },
    {
      id: 4,
      title: "Jest Testing Tutorial",
      type: "tutorial",
      url: "https://example.com/jest-tutorial",
      description: "Complete guide to testing with Jest",
      createdAt: new Date("2025-02-20T10:15:00.000Z").toISOString()
    }
  ];
};