import { 
  type User, 
  type InsertUser, 
  type ContactFormData,
  type ContactSubmission,
  type InsertContactSubmission,
  users,
  contactSubmissions
} from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(data).returning();
    return result[0];
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    const results = await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
    return results;
  }
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissionsMap: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.contactSubmissionsMap = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      ...data,
      id: randomUUID(),
      createdAt: new Date()
    };
    this.contactSubmissionsMap.set(submission.id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissionsMap.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new DbStorage();
