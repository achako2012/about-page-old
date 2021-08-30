import About from "../models/About.js";
import Experience from "../models/Experience.js";
import Skills from "../models/Skills.js";
import {CustomRequest} from "../types.js";
import {Response} from "express";


export const getAbout = async (req: CustomRequest, res: Response) => {
    const about = await About.find({}, (err, doc) => {

        if (err) console.log(err)

        console.log(doc)
    })

    res.status(200).json(about)
}

export const getExperience = async (req: CustomRequest, res: Response) => {
    const experienceList = await Experience.find({}, (err, doc) => {

        if (err) console.log(err)

        console.log(doc)
    })

    res.status(200).json(experienceList)
}

export const getSkills = async (req: CustomRequest, res: Response) => {
    const skills = await Skills.find({}, (err, doc) => {

        if (err) console.log(err)

        console.log(doc)
    })

    res.status(200).json(skills)
}

export const addAbout = async (req: CustomRequest, res: Response) => {
    const {name, intro, position, title, article} = req.body

    const about = {
        name: name,
        intro: intro,
        position: position,
        title: title,
        article: article
    }

    await About.create(about, (err, doc) => {

        if (err) console.log(err)

        console.log("Object about is saved", doc)
    })

    res.status(201).json(req.body)
}

export const addExperience = async (req: CustomRequest, res: Response) => {
    const {title, article} = req.body

    const experience = {
        title: title,
        article: article
    }

    await Experience.create(experience, (err, doc) => {

        if (err) console.log(err)

        console.log("Object about is saved", doc)
    })

    res.status(201).json(req.body)
}

export const addSkill = async (req: CustomRequest, res: Response) => {
    const {title, value} = req.body

    const skill = {
        title: title,
        value: value
    }

    await Skills.create(skill, (err, doc) => {

        if (err) console.log(err)

        console.log("Object about is saved", doc)
    })

    res.status(201).json(req.body)
}

export const deleteAboutById = async (req: CustomRequest, res: Response) => {
    const aboutId = req.body.id

    await About.findOneAndDelete({_id: aboutId}, undefined, (err: any, result: any) => {

        if (err) console.log(err)

        console.log(result)
    })

    res.status(200).json({"message": `about by id: ${aboutId} deleted!`})
}

export const deleteExperienceById = async (req: CustomRequest, res: Response) => {
    const experienceId = req.body.id

    await Experience.findOneAndDelete({_id: experienceId}, undefined, (err: any, result: any) => {

        if (err) console.log(err)

        console.log(result)
    })

    res.status(200).json({"message": `about by id: ${experienceId} deleted!`})
}

export const deleteSkillById = async (req: CustomRequest, res: Response) => {
    const skillId = req.body.id

    await Skills.findOneAndDelete({_id: skillId}, undefined, (err: any, result: any) => {

        if (err) console.log(err)

        console.log(result)
    })

    res.status(200).json({"message": `about by id: ${skillId} deleted!`})
}