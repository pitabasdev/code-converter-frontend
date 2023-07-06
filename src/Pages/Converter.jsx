import React, { useState } from "react";
import { Textarea, Select, Button, Box, Grid, Text } from "@chakra-ui/react";

const Converter = () => {
	const [inputCode, setInputCode] = useState("");
	const [language, setLanguage] = useState("Python");
	const [convertedCode, setConvertedCode] = useState("");
	const [loading, setLoading] = useState(false);

	const handleCodeChange = (e) => {
		setInputCode(e.target.value);
	};

	const handleLanguageChange = (e) => {
		setLanguage(e.target.value);
	};

	const handleConvert = async () => {
		try {
			setLoading(true);
			const response = await fetch(
				`http://localhost:8080/convert?language=${language}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ inputcode: inputCode }),
				}
			);

			if (!response.ok) {
				throw new Error("Code conversion failed");
			}

			const convertedCode = await response.json();
			setLoading(false);
			setConvertedCode(convertedCode);
		} catch (error) {
			console.error("Error during code conversion:", error);
		}
	};
	const handleDebug = async () => {
		try {
			setLoading(true);
			const response = await fetch(`http://localhost:8080/debug`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ inputcode: inputCode }),
			});

			if (!response.ok) {
				throw new Error("Code conversion failed");
			}

			const convertedCode = await response.json();
			setLoading(false);
			setConvertedCode(convertedCode);
		} catch (error) {
			console.error("Error during code conversion:", error);
		}
	};

	const handleQuality = async () => {
		try {
			setLoading(true);
			const response = await fetch(`http://localhost:8080/qualityCheck`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ inputcode: inputCode }),
			});

			if (!response.ok) {
				throw new Error("Code conversion failed");
			}

			const convertedCode = await response.json();
			setLoading(false);
			setConvertedCode(convertedCode);
		} catch (error) {
			console.error("Error during code conversion:", error);
		}
	};

	return (
		<Grid
			height="100vh"
			templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
			templateRows={{ base: "1fr", lg: "auto" }}
		>
			<Box padding="4" color="brand.900">
				<Text
					fontSize="2xl"
					textTransform="uppercase"
					letterSpacing="wide"
					fontWeight="extrabold"
					mb="2"
				>
					Code Converter
				</Text>
				<Text fontSize="lg" color="brand.500" mb="4">
					Convert and debug your code with quality checks.....
				</Text>
				<Textarea
					value={inputCode}
					onChange={(e) => setInputCode(e.target.value)}
					placeholder="Enter code here....."
					height="80vh"
					resize="none"
					fontFamily="monospace"
					fontSize="sm"
					backgroundColor="brand.900"
					color="white"
					borderColor="brand.800"
					_hover={{ borderColor: "brand.700" }}
					_focus={{ borderColor: "brand.700" }}
				/>
			</Box>
			<Box
				padding="4"
				borderLeft={{ base: "none", lg: "1px solid" }}
				borderColor="gray.200"
				backgroundColor="white"
			>
				<Text fontSize="xl" fontWeight="bold" mb="4">
					Options
				</Text>
				<Select
					value={language}
					onChange={(e) => setLanguage(e.target.value)}
					marginBottom="4"
				>
					<option value="">Select Language</option>
					<option value="Python">Python</option>
					<option value="JavaScript">JavaScript</option>
					<option value="C++">C++</option>
					<option value="C#">C#</option>
					<option value="PHP">PHP</option>
				</Select>
				<Button
					onClick={handleConvert}
					marginBottom="2"
					backgroundColor="brand.800"
					color="white"
					_hover={{ backgroundColor: "brand.900" }}
					_focus={{ backgroundColor: "brand.900" }}
					marginRight="2"
					fontWeight="bold"
					textTransform="uppercase"
					letterSpacing="wide"
					paddingX="6"
					isDisabled={inputCode === ""}
				>
					Convert
				</Button>
				<Button
					onClick={handleDebug}
					marginBottom="2"
					backgroundColor="brand.800"
					color="white"
					_hover={{ backgroundColor: "brand.900" }}
					_focus={{ backgroundColor: "brand.900" }}
					marginRight="2"
					fontWeight="bold"
					textTransform="uppercase"
					letterSpacing="wide"
					paddingX="6"
					isDisabled={inputCode === ""}
				>
					Debug
				</Button>
				<Button
					onClick={handleQuality}
					marginBottom="2"
					backgroundColor="brand.800"
					color="white"
					_hover={{ backgroundColor: "brand.900" }}
					_focus={{ backgroundColor: "brand.900" }}
					marginRight="2"
					fontWeight="bold"
					textTransform="uppercase"
					letterSpacing="wide"
					paddingX="6"
					isDisabled={inputCode === ""}
				>
					Quality Check
				</Button>
				<Textarea
					value={
						loading
							? "Please wait while response is loading...."
							: convertedCode
					}
					readOnly
					height="60vh"
					resize="none"
					placeholder="Converted code will appear here..."
					fontFamily="monospace"
					fontSize="sm"
					backgroundColor="brand.50"
					borderColor="gray.300"
					_hover={{ borderColor: "gray.400" }}
					_focus={{ borderColor: "gray.400" }}
				/>
			</Box>
		</Grid>
	);
};

export default Converter;
