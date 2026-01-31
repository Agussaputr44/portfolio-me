import { Request, Response } from 'express';
import * as projectService from '../services/project.service';
import * as storageService from '../services/storage.service';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const data = await projectService.getAllProjects();

    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getDetailProject = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const data = await projectService.getProjectById(id);

    if (!data) {
      res.status(404).json({ message: "Project not found" });
      return;
    }

    res.status(200).json({ success: true, data: data });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const { title, description, repoUrl, techStack } = req.body;

    const file = req.file;

    if (!title) {
      res.status(400).json({ message: "Title wajib diisi!" });
      return;
    }

    let techStackArray: string[] = [];
    if (typeof techStack === 'string') {
      techStackArray = techStack.split(',').map((item: string) => item.trim());
    } else if (Array.isArray(techStack)) {
      techStackArray = techStack;
    }

    let finalImageUrl = "";
    if (file) {
      finalImageUrl = await storageService.uploadProjectImage(file);
    }

    const newProject = await projectService.createNewProject({
      title,
      description,
      tech_stack: techStackArray,
      repo_url: repoUrl,
      image_url: finalImageUrl
    });

    res.status(201).json({
      success: true,
      message: "Project berhasil ditambahkan dengan gambar!",
      data: newProject
    });

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};