import { Request, Response } from 'express';
import axios from 'axios';

export const getGithubContributions = async (req: Request, res: Response) => {
    try {
        const token = process.env.GITHUB_TOKEN;
        const targetUsername = 'Agussaputr44';

        const query = `
        query($userName:String!) {
            user(login: $userName){
            contributionsCollection {
                contributionCalendar {
                totalContributions
                weeks {
                    contributionDays {
                    contributionCount
                    date
                    color 
                    }
                }
                }
            }
            }
        }
        `;

        const response = await axios.post(
            'https://api.github.com/graphql',
            {
                query,
                variables: { userName: targetUsername },
            },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );


        const userData = response.data.data.user;

        if (!userData) {
            return res.status(404).json({
                success: false,
                message: `User GitHub '${targetUsername}' tidak ditemukan. Cek ejaan username!`
            });
        }

        const calendar = userData.contributionsCollection.contributionCalendar;
        const flatContributions = calendar.weeks.flatMap((week: any) => week.contributionDays);

        res.status(200).json({
            success: true,
            data: {
                total: calendar.totalContributions,
                contributions: flatContributions
            }
        });

    } catch (error: any) {
        console.error("Error System:", error.message);
        res.status(500).json({
            success: false,
            message: "Terjadi kesalahan server saat request ke GitHub."
        });
    }
};