import { prisma } from "./client";

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany();
    return { todos };
  } catch (error) {
    return { error };
  }
}

export async function createTodo(title: string, userId: string) {
    console.log(title, userId)
    const todo = await prisma.todo.create({ data: { title, userId } });
  try {
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function getTodoById(id: string) {
  try {
    const todo = await prisma.todo.findUnique({ where: { id } });
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function updateTodo(id: string, isCompleted: boolean) {
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: { isCompleted },
    });
    return { todo };
  } catch (error) {
    return { error };
  }
}