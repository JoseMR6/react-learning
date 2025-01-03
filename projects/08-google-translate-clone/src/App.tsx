import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from './constants'
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'
import { useDebounce } from './hooks/useDebounce'

function App() {
  const { fromLanguaje, toLanguaje, fromText, result, loading,
    setFromLanguage, setToLanguage, interchangeLanguages,
    setFromText, setResult
  } = useStore()

  const debouncedFromText = useDebounce(fromText, 300)

  useEffect(() => {
    if (debouncedFromText === '') return

    translate({ fromLanguaje, toLanguaje, text: debouncedFromText })
      .then((result) => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('Error') })
  }, [debouncedFromText, fromLanguaje, toLanguaje])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => { })
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguaje]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

  return (
    <Container fluid>
      <h2>Google Translate</h2>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguaje}
              onChange={setFromLanguage}
            />
            <TextArea
              loading={loading}
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguaje === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguaje}
              onChange={setToLanguage}
            />
            <div style={{ position: 'relative' }}>
              <TextArea
                loading={loading}
                type={SectionType.To}
                value={result}
                onChange={setResult}
              />
              <div style={{
                position: "absolute", left: 0, bottom: 0, display: "flex"
              }}>
                <Button variant='link'
                  onClick={handleClipboard}
                >
                  <ClipboardIcon />
                </Button>
                <Button variant='link'
                  onClick={handleSpeak}
                >
                  <SpeakerIcon />
                </Button>
              </div>
            </div>

          </Stack>
        </Col>
      </Row>
    </Container >
  )
}

export default App
