"use client";

import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart, Colors, Legend, Tooltip } from "chart.js";

// chart.js registry
Chart.register(Colors, Legend, ArcElement, Tooltip);

// component code
export default function RepoStats({ repos, bytesOfCode }) {
    const mostBytes = Math.max(...bytesOfCode.datasets[0].data);
    const mostBytesLanguage = bytesOfCode.labels[bytesOfCode.datasets[0].data.indexOf(mostBytes)];

    const leastBytes = Math.min(...bytesOfCode.datasets[0].data);
    const leastBytesLanguage = bytesOfCode.labels[bytesOfCode.datasets[0].data.indexOf(leastBytes)];

    // find most popular language of all repos
    let langMap = new Map();
    for (const i in repos) {
        const item = repos[i];
        const keys = Array.from(langMap.keys());

        if (keys.indexOf(item.language) > -1) {
            // increment value
            langMap.set(item.language, langMap.get(item.language) + 1);
        } else {
            // initial value
            langMap.set(item.language, 1);
        }
    }

    const keys = Array.from(langMap.keys());
    const values = Array.from(langMap.values());
    const mostUsedLanguageRepoCount = Math.max(...values);
    const mostUsedLanguage = keys.at(values.indexOf(mostUsedLanguageRepoCount));
    const mostUsedLanguagePercentage = Math.round((mostUsedLanguageRepoCount / repos.length) * 100.0);

    return (
        <div className="flex flex-col -m-6 md:m-0 lg:flex-row md:items-start md:gap-4 md:items-center md:justify-center">
            <div className="mx-auto md:mx-0 size-96 md:-m-10 mb-2">
                <Doughnut data={bytesOfCode} options={{
                    plugins: {
                        legend: {
                            position: "left"
                        }
                    }
                }} />
            </div>

            <div className="flex flex-col mb-4 items-start gap-4 md:gap-8 lg:gap-16 items-center justify-center max-w-md p-6 md:max-w-3xl">
                <div className="space-y-2">
                    <p className="text-center italic text-md md:text-xl text-gray-700">
                        I start a majority of my projects using <strong>{mostUsedLanguage}</strong>, with nearly <strong>{mostUsedLanguagePercentage}%</strong> of my repositories consisting mainly of the technology! 😮
                    </p>
                </div>

                <div className="space-y-2">
                    <p className="text-center italic text-md md:text-xl text-gray-700">
                        These repositories contain about <strong>{mostBytes}</strong> bytes of {mostBytesLanguage} code! 😎🤙
                    </p>
                </div>

                <div className="space-y-2">
                    <p className="text-center italic text-md md:text-xl text-gray-700">
                        Meanwhile, I&apos;ve only contributed <strong>{leastBytes}</strong> bytes of {leastBytesLanguage} code... 🤏😭
                    </p>
                </div>
            </div>
        </div>
    );
}