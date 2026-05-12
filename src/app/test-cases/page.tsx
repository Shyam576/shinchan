"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type Status = "PASS" | "FAIL" | "SKIP" | "pending";

const testCases = [
  {
    id: "TC-001",
    title: "Verify Birthday Girl is Awesome",
    steps: "1. Observe QA Queen. 2. Count achievements. 3. Check smile.",
    expected: "Confirmed AWESOME. No defects found.",
  },
  {
    id: "TC-002",
    title: "Validate Cake Taste",
    steps: "1. Slice cake. 2. Consume sample. 3. Report joy.",
    expected: "Cake passes taste test. Deploy to stomach.",
  },
  {
    id: "TC-003",
    title: "Test Resistance to Boring Days",
    steps: "1. Present fun activity. 2. Observe response. 3. Confirm non-boring outcome.",
    expected: "Birthday girl immune to boredom. ✅",
  },
  {
    id: "TC-004",
    title: "Check Bug-Finding Superpowers",
    steps: "1. Show her any app. 2. Wait 3 seconds. 3. Count bugs found.",
    expected: "At least 5 bugs found per minute. Superpower confirmed.",
  },
  {
    id: "TC-005",
    title: "Verify Admin Rights Are Intact",
    steps: "1. Attempt to decline birthday wishes. 2. Check permissions.",
    expected: "Access DENIED to sadness. Admin override active.",
  },
  {
    id: "TC-006",
    title: "Test Happiness Deployment Pipeline",
    steps: "1. Receive wishes. 2. Process via heart. 3. Deploy smile.",
    expected: "Smile successfully deployed to production. 😄",
  },
];

const statusColors: Record<Status, string> = {
  PASS: "#6BCB77",
  FAIL: "#FF4D4D",
  SKIP: "#FFD93D",
  pending: "#E5E7EB",
};

const statusLabels: Record<Status, string> = {
  PASS: "✅ PASS",
  FAIL: "❌ FAIL",
  SKIP: "⏭️ SKIP",
  pending: "⏳ Pending",
};

export default function TestCasesPage() {
  const [statuses, setStatuses] = useState<Record<string, Status>>(
    Object.fromEntries(testCases.map((tc) => [tc.id, "pending"]))
  );

  function setStatus(id: string, s: Status) {
    setStatuses((prev) => ({ ...prev, [id]: s }));
  }

  const passed = Object.values(statuses).filter((s) => s === "PASS").length;
  const allDone = Object.values(statuses).every((s) => s !== "pending");

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#4D96FF] border-4 border-[#1E1E1E] rounded-[24px] shadow-[8px_8px_0px_#1E1E1E] p-6 text-center mb-8"
        >
          <h1 className="text-4xl font-black text-white drop-shadow-[2px_2px_0px_#1E1E1E] mb-2">
            📋 QA Birthday Test Suite
          </h1>
          <p className="text-white font-bold">
            Run all test cases for the Birthday QA Queen&apos;s special day!
          </p>
          <div className="mt-3 bg-white border-2 border-[#1E1E1E] rounded-full px-4 py-1 inline-block font-black">
            {passed} / {testCases.length} passed 🟢
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {testCases.map((tc, i) => {
            const status = statuses[tc.id];
            return (
              <motion.div
                key={tc.id}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                style={{ backgroundColor: status !== "pending" ? statusColors[status] : "#FFF4D6" }}
                className="border-4 border-[#1E1E1E] rounded-[24px] shadow-[6px_6px_0px_#1E1E1E] p-5 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-[#1E1E1E] text-white text-xs font-black px-2 py-0.5 rounded-full">
                        {tc.id}
                      </span>
                      <span className="font-black text-[#1E1E1E] text-lg">{tc.title}</span>
                    </div>
                    <p className="text-sm text-[#1E1E1E] mb-1">
                      <strong>Steps:</strong> {tc.steps}
                    </p>
                    <p className="text-sm text-[#1E1E1E]">
                      <strong>Expected:</strong> {tc.expected}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <span className="text-sm font-black text-center">
                      {statusLabels[status]}
                    </span>
                    <div className="flex gap-2">
                      {(["PASS", "FAIL", "SKIP"] as Status[]).map((s) => (
                        <button
                          key={s}
                          onClick={() => setStatus(tc.id, s)}
                          style={{ backgroundColor: statusColors[s] }}
                          className="border-2 border-[#1E1E1E] rounded-full px-2 py-1 text-xs font-black shadow-[2px_2px_0px_#1E1E1E] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {allDone && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-8 bg-[#6BCB77] border-4 border-[#1E1E1E] rounded-[24px] shadow-[8px_8px_0px_#1E1E1E] p-6 text-center"
          >
            <p className="text-2xl font-black text-[#1E1E1E]">
              🎉 Test suite complete! {passed === testCases.length ? "100% pass rate — QA Legend status confirmed! 🏆" : `${passed} passed. Still better than most devs' PRs. 😄`}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
