"use client";

import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart, Colors, Legend, Tooltip } from "chart.js";

// chart.js registry
Chart.register(Colors, Legend, ArcElement, Tooltip);

// component code
export default function RepoStats({ repoLanguageData }) {
    const most_used_language_linecount = Math.max(...repoLanguageData.datasets[0].data);
    const most_used_language = repoLanguageData.labels[repoLanguageData.datasets[0].data.indexOf(most_used_language_linecount)];

    const least_used_language_linecount = Math.min(...repoLanguageData.datasets[0].data);
    const least_used_language = repoLanguageData.labels[repoLanguageData.datasets[0].data.indexOf(least_used_language_linecount)];

    return (
        <div>
            <div className="py-4 text-3xl font-medium text-gray-700">Statistics</div>
            <div className="flex flex-col -m-6 md:m-0 lg:flex-row md:items-start md:gap-4 md:items-center md:justify-center">
                <div className="mx-auto md:mx-0 size-96 md:-m-10 mb-2">
                    <Doughnut data={repoLanguageData} options={{
                        plugins: {
                            legend: {
                                position: "left"
                            }
                        }
                    }} />
                </div>

                <div className="flex flex-col mb-4 items-start gap-4 md:gap-8 lg:gap-16 items-center justify-center">
                    <div className="space-y-2">
                        <h1 className="text-center text-2xl md:text-4xl font-medium text-gray-900">Most used lanuage: {most_used_language}</h1>
                        <p className="text-center italic text-md md:text-xl text-gray-700">
                            In my repositories there&apos;s about <strong>{most_used_language_linecount}</strong> lines of {most_used_language} code! That&apos;s a lot 😎
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-center text-2xl md:text-4xl font-medium text-gray-900">Least used lanuage: {least_used_language}</h1>
                        <p className="text-center italic text-md md:text-xl text-gray-700">
                            There&apos;s only about <strong>{least_used_language_linecount}</strong> lines of {least_used_language} code... I don&apos; really wanna talk about it 😭
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}