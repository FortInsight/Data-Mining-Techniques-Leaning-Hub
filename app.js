const storageKey = "data-mining-interactive-textbook-v1";

const QUESTIONS_PER_LEVEL = 10;
const LEVEL_COUNT = 5;

const chapters = [
  {
    id: 1,
    title: "Introduction",
    pages: "Chapter 1 | pp. 12-39",
    summary: "This chapter introduces data mining as part of the broader knowledge discovery process. It explains why data mining matters, what kinds of data and patterns can be mined, which technologies support it, and the major practical and social issues in the field.",
    topics: [
      "Why data mining emerged in the data age",
      "Definition of data mining and KDD",
      "Data types and patterns that can be mined",
      "Technologies behind data mining",
      "Applications, issues, and societal impact"
    ],
    flashcards: [
      { front: "What is data mining?", back: "Data mining is the process of discovering interesting, useful, and understandable patterns from large data collections." },
      { front: "How does KDD relate to data mining?", back: "KDD is the full knowledge discovery process, while data mining is the central step that extracts patterns." },
      { front: "Name three kinds of patterns data mining can discover.", back: "Frequent patterns, classification/regression models, clusters, outliers, and descriptive summaries are common examples." },
      { front: "Why is data mining important in modern systems?", back: "Because data is growing rapidly, and organizations need automated ways to transform raw data into knowledge." },
      { front: "Is data mining just hype?", back: "No. Data mining is a mature field built on years of work in databases, machine learning, statistics, and pattern recognition." },
      { front: "Is data mining just a repackaging of older technologies?", back: "No. It combines and extends older technologies so they can work together on very large, complex, and mixed data." },
      { front: "How did data mining evolve from database technology?", back: "It developed through a progression from data collection, to database creation, to data warehousing, and then to pattern discovery." },
      { front: "How did data mining evolve from machine learning?", back: "Machine learning contributed algorithms such as classification, clustering, regression, and automated pattern learning." },
      { front: "How did data mining evolve from statistics?", back: "Statistics contributed ideas such as probability, sampling, inference, and careful evaluation of findings." },
      { front: "How did data mining evolve from pattern recognition?", back: "Pattern recognition contributed feature extraction, similarity-based learning, and ways to identify structure in data." },
      { front: "What are the main steps in the KDD process?", back: "The KDD process includes data cleaning, integration, selection, transformation, mining, evaluation, and presentation." },
      { front: "How is a data warehouse different from a database?", back: "A data warehouse is subject-oriented, integrated, time-variant, and non-volatile for analysis, while a database is usually operational and transactional." },
      { front: "What is characterization in data mining?", back: "Characterization summarizes the general features of a target class." },
      { front: "What is discrimination in data mining?", back: "Discrimination compares classes in order to highlight their differences." },
      { front: "What is association analysis?", back: "Association analysis finds patterns showing which items or attributes tend to appear together." },
      { front: "What is correlation analysis?", back: "Correlation analysis measures the statistical relationship between variables." },
      { front: "What is classification?", back: "Classification predicts category labels using supervised learning." },
      { front: "What is regression?", back: "Regression predicts numeric values rather than category labels." },
      { front: "What is clustering?", back: "Clustering groups similar objects when no predefined labels are given." },
      { front: "What is outlier analysis?", back: "Outlier analysis identifies unusual or exceptional data points." },
      { front: "Why do outliers matter in fraud detection?", back: "Fraud often appears as unusual behavior, so outliers can reveal hidden risks and suspicious cases." },
      { front: "Name two outlier detection methods.", back: "Two common methods are distance-based outlier detection and density-based outlier detection such as LOF." },
      { front: "What are common challenges in data mining?", back: "Common challenges include scalability, high dimensionality, noisy data, user interaction, privacy, and real-time mining." },
      { front: "Why is mining huge datasets difficult?", back: "Huge datasets create challenges such as efficiency limits, memory limits, distributed processing needs, and algorithm scalability." },
      { front: "What are research challenges in mining sensor or stream data?", back: "Important challenges include real-time processing, concept drift, continuous streams, and noisy sensor data." }
    ],
    quiz: [
      {
        question: "Which statement best describes data mining?",
        options: [
          "It is only the storage of data in a warehouse",
          "It is the discovery of patterns and knowledge from large data sets",
          "It is the same thing as operating system design",
          "It is only about drawing charts"
        ],
        answerIndex: 1,
        explanation: "Data mining focuses on extracting meaningful patterns and knowledge from data, not just storing or visualizing it."
      },
      {
        question: "What is the role of data mining inside the KDD process?",
        options: [
          "It is the first and only step",
          "It is the core pattern-discovery step inside a larger process",
          "It replaces data cleaning entirely",
          "It is only used after reporting"
        ],
        answerIndex: 1,
        explanation: "KDD includes selection, cleaning, transformation, mining, and interpretation. Data mining is the central extraction step."
      },
      {
        question: "Which of the following is a major data mining task?",
        options: [
          "Cluster analysis",
          "Formatting a printer driver",
          "Typing a bibliography",
          "Replacing a motherboard"
        ],
        answerIndex: 0,
        explanation: "Cluster analysis is a core data mining task used to group similar objects."
      },
      {
        question: "Why do social issues matter in data mining?",
        options: [
          "Because models have no effect on people",
          "Because privacy, bias, and misuse of data can affect society",
          "Because only researchers see mined data",
          "Because social issues are unrelated to computing"
        ],
        answerIndex: 1,
        explanation: "The chapter highlights privacy, ethics, and social impact as major issues in practical data mining."
      },
      {
        question: "Which technology area strongly supports data mining?",
        options: [
          "Machine learning",
          "Wallpaper design",
          "Food chemistry only",
          "Bridge painting"
        ],
        answerIndex: 0,
        explanation: "Machine learning, statistics, and database systems are among the key technologies supporting data mining."
      },
      {
        question: "Which statement best describes how data mining developed as a field?",
        options: [
          "It grew as a multidisciplinary field from databases, machine learning, statistics, and pattern recognition",
          "It appeared suddenly without links to older fields",
          "It is only a replacement for spreadsheet software",
          "It is mainly a manual note-taking activity"
        ],
        answerIndex: 0,
        explanation: "Data mining developed by combining ideas and methods from several mature research areas."
      },
      {
        question: "Which sequence correctly lists the main steps of KDD?",
        options: [
          "Cleaning, integration, selection, transformation, mining, evaluation, presentation",
          "Mining, cleaning, storage, deletion, charting, reporting, printing",
          "Collection, printing, coding, sorting, mining, backup, archiving",
          "Selection, mining, formatting, shipping, evaluation, repair, storage"
        ],
        answerIndex: 0,
        explanation: "KDD moves from preparing data to mining it and then evaluating and presenting the discovered knowledge."
      },
      {
        question: "How is a data warehouse different from a database?",
        options: [
          "A warehouse is used for analytical processing and is time-variant and non-volatile, while a database is typically operational and transactional",
          "A warehouse is only used for typing documents",
          "A database stores only historical data and never changes",
          "There is no meaningful difference between them"
        ],
        answerIndex: 0,
        explanation: "Warehouses are designed for analysis and decision support, while databases are usually used for day-to-day operations."
      },
      {
        question: "Which pairing is correct?",
        options: [
          "Classification predicts labels, clustering groups unlabeled data, association finds co-occurrence, and outlier analysis detects anomalies",
          "Classification groups unlabeled data, clustering predicts labels, association stores backups, and outlier analysis draws charts",
          "Classification predicts numbers only, clustering updates databases, association removes noise, and outlier analysis creates warehouses",
          "Classification and regression are identical, and clustering is the same as association"
        ],
        answerIndex: 0,
        explanation: "These are distinct data mining tasks with different purposes and outputs."
      },
      {
        question: "Which business example best matches association analysis?",
        options: [
          "Finding products that customers often buy together in e-commerce",
          "Repairing broken keyboards in an office",
          "Tracking printer toner levels by hand",
          "Formatting hard drives before installation"
        ],
        answerIndex: 0,
        explanation: "Association analysis is commonly used for recommendation and market basket style patterns."
      },
      {
        question: "Which statement best explains the difference between discrimination and classification?",
        options: [
          "Discrimination compares classes to show differences, while classification assigns new cases to labels",
          "Discrimination predicts numeric values, while classification finds association rules",
          "Discrimination and classification mean exactly the same thing",
          "Classification compares classes, while discrimination groups unlabeled data"
        ],
        answerIndex: 0,
        explanation: "Discrimination highlights differences between classes, while classification predicts the label for a case."
      },
      {
        question: "Which outlier detection method is especially useful for fraud detection?",
        options: [
          "Density-based methods such as LOF",
          "Random guessing",
          "Typing notes about suspicious records",
          "Ignoring unusual values completely"
        ],
        answerIndex: 0,
        explanation: "Density-based methods can highlight points that behave differently from their local neighborhood, which is useful in fraud analysis."
      },
      {
        question: "Which is an example of a user-interaction challenge in data mining?",
        options: [
          "Interpreting results and visualizing complex patterns clearly",
          "Replacing a monitor cable",
          "Charging a laptop battery",
          "Installing a keyboard driver"
        ],
        answerIndex: 0,
        explanation: "User interaction includes guiding the mining process and making the results understandable."
      },
      {
        question: "Why is mining huge datasets harder?",
        options: [
          "Algorithms must scale, memory can be limited, and distributed processing may be needed",
          "Because large datasets always contain no useful patterns",
          "Because only small files can be analyzed",
          "Because large datasets prevent all visualization"
        ],
        answerIndex: 0,
        explanation: "Very large datasets raise computational, storage, and system design challenges."
      },
      {
        question: "Which is a research challenge in mining sensor or stream data?",
        options: [
          "Real-time processing and handling concept drift",
          "Making every value alphabetical",
          "Converting all data into paper reports only",
          "Removing time information from every record"
        ],
        answerIndex: 0,
        explanation: "Streams and sensors produce continuous, changing data that often must be processed immediately."
      }
    ]
  },
  {
    id: 2,
    title: "Getting to Know Your Data",
    pages: "Chapter 2 | pp. 41-76",
    summary: "This chapter focuses on understanding data before mining it. It covers attribute types, statistical descriptions, visualization methods, and similarity or dissimilarity measures used to compare data objects.",
    topics: [
      "Attribute and data object types",
      "Basic statistical descriptions",
      "Visualization strategies",
      "Similarity and dissimilarity measures",
      "Data matrices and distance concepts"
    ],
    flashcards: [
      { front: "What is an attribute in data mining?", back: "An attribute is a property or characteristic used to describe an object, such as age, color, or income." },
      { front: "What is the difference between nominal and ordinal attributes?", back: "Nominal attributes name categories without order, while ordinal attributes have a meaningful order." },
      { front: "Why do analysts visualize data before mining?", back: "Visualization helps reveal patterns, distributions, anomalies, and relationships before formal modeling." },
      { front: "What does a similarity measure do?", back: "It quantifies how alike two data objects are, while a dissimilarity measure quantifies how different they are." },
      { front: "What is a data object?", back: "A data object is an entity, record, case, or observation described by attributes." },
      { front: "What is a nominal attribute?", back: "A nominal attribute uses names or symbols to represent categories, with no natural order." },
      { front: "What is a binary attribute?", back: "A binary attribute has only two possible states, such as yes or no, 1 or 0, true or false." },
      { front: "What is the difference between symmetric and asymmetric binary attributes?", back: "A symmetric binary attribute treats both states as equally important, while an asymmetric binary attribute gives more importance to one state, often the presence of a feature." },
      { front: "What is an ordinal attribute?", back: "An ordinal attribute has values with a meaningful ranking, but the exact distance between ranks may not be known." },
      { front: "What is a numeric attribute?", back: "A numeric attribute is quantitative and can be measured as an integer or real value." },
      { front: "What is the difference between interval-scaled and ratio-scaled attributes?", back: "Interval-scaled data has meaningful differences but no true zero, while ratio-scaled data has a true zero and supports meaningful ratio comparisons." },
      { front: "What does the mean measure?", back: "The mean measures the arithmetic average of a set of values." },
      { front: "What does the median measure?", back: "The median is the middle value in ordered data and is often less affected by extreme values than the mean." },
      { front: "What does the mode measure?", back: "The mode is the most frequently occurring value in a dataset." },
      { front: "What is a five-number summary?", back: "A five-number summary includes the minimum, first quartile, median, third quartile, and maximum." },
      { front: "Why are boxplots useful?", back: "Boxplots help summarize spread, central tendency, quartiles, and possible outliers." },
      { front: "Why are scatter plots useful?", back: "Scatter plots help reveal relationships, trends, clusters, and possible outliers between two variables." },
      { front: "What does a q-q plot help you inspect?", back: "A quantile-quantile plot helps compare the distribution of data against another distribution or dataset." },
      { front: "What is Euclidean distance?", back: "Euclidean distance measures straight-line distance between two numeric points." },
      { front: "What is Manhattan distance?", back: "Manhattan distance measures the sum of coordinate-wise absolute differences." },
      { front: "What is Minkowski distance?", back: "Minkowski distance is a general family of distance measures that includes Euclidean and Manhattan distance as special cases." },
      { front: "What is the supremum distance?", back: "The supremum distance is the maximum absolute difference across corresponding coordinates." },
      { front: "What is cosine similarity?", back: "Cosine similarity measures how closely two vectors point in the same direction." },
      { front: "What is the Tanimoto coefficient?", back: "The Tanimoto coefficient measures shared features relative to total features and is often used for binary or sparse data." }
    ],
    quiz: [
      {
        question: "Which attribute type has categories with a meaningful order?",
        options: ["Nominal", "Ordinal", "Binary only", "Identifier only"],
        answerIndex: 1,
        explanation: "Ordinal attributes preserve order, such as low, medium, and high."
      },
      {
        question: "Why are mean, median, and mode useful?",
        options: [
          "They describe central tendency",
          "They replace clustering",
          "They store files",
          "They eliminate outliers automatically"
        ],
        answerIndex: 0,
        explanation: "These are classic measures of central tendency used to summarize a distribution."
      },
      {
        question: "What is the purpose of data visualization?",
        options: [
          "To hide patterns",
          "To inspect patterns and relationships visually",
          "To remove all noise",
          "To avoid measuring similarity"
        ],
        answerIndex: 1,
        explanation: "Visualization helps analysts understand data structure, relationships, and possible anomalies."
      },
      {
        question: "Which measure is commonly used for numeric distance?",
        options: ["Minkowski distance", "Operating margin", "Cache size", "Transaction lock"],
        answerIndex: 0,
        explanation: "Minkowski distance is a family of distance measures used for numeric data."
      },
      {
        question: "Why is understanding data types important before mining?",
        options: [
          "Because all attributes are treated identically",
          "Because the choice of methods depends on attribute type and structure",
          "Because mining ignores data representation",
          "Because only charts matter"
        ],
        answerIndex: 1,
        explanation: "Data representation affects preprocessing, similarity measures, and algorithm choice."
      },
      {
        question: "Which statement best describes a data object?",
        options: [
          "An entity or record described by attributes",
          "A chart title used in reporting",
          "A software license",
          "A random value with no properties"
        ],
        answerIndex: 0,
        explanation: "Chapter 2 treats data objects as entities or records that are described by one or more attributes."
      },
      {
        question: "Which attribute type is best described as a category with no natural order?",
        options: [
          "Nominal",
          "Ordinal",
          "Ratio-scaled",
          "Continuous only"
        ],
        answerIndex: 0,
        explanation: "Nominal attributes are category labels without an inherent ranking."
      },
      {
        question: "What is true about asymmetric binary attributes?",
        options: [
          "One state is more important than the other, often the presence of a property",
          "Both states are always equally important",
          "They can take any real-number value",
          "They always describe ordered rankings"
        ],
        answerIndex: 0,
        explanation: "Asymmetric binary attributes give more importance to one of the two states, often the present state."
      },
      {
        question: "Which of the following belongs in the five-number summary?",
        options: [
          "Minimum, first quartile, median, third quartile, maximum",
          "Mean, mode, variance, skewness, kurtosis",
          "Median, histogram, boxplot, quartile, range",
          "Sum, count, z-score, quartile, median"
        ],
        answerIndex: 0,
        explanation: "The five-number summary consists of the minimum, Q1, median, Q3, and maximum."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>Use this grouped frequency table.</p>
            <table class="quiz-data-table">
              <thead>
                <tr><th>Age</th><th>Frequency</th></tr>
              </thead>
              <tbody>
                <tr><td>1-5</td><td>200</td></tr>
                <tr><td>6-15</td><td>450</td></tr>
                <tr><td>16-20</td><td>300</td></tr>
                <tr><td>21-50</td><td>1500</td></tr>
                <tr><td>51-80</td><td>700</td></tr>
                <tr><td>81-110</td><td>44</td></tr>
              </tbody>
            </table>
            <p>Which interval contains the approximate median?</p>
          </div>
        `,
        question: "Which interval contains the approximate median in the grouped age-frequency table?",
        options: [
          "1-5",
          "16-20",
          "21-50",
          "81-110"
        ],
        answerIndex: 2,
        explanation: "The total frequency is 3194, so the midpoint is near the 1597th value, which falls inside the 21-50 interval."
      },
        {
          questionHtml: `
            <div class="question-block">
              <p>A hospital recorded the ages and body-fat percentages of 18 adults.</p>
            <table class="quiz-data-table">
              <thead>
                <tr><th>Age</th><th>% Fat</th></tr>
              </thead>
              <tbody>
                <tr><td>23</td><td>9.5</td></tr>
                <tr><td>23</td><td>26.5</td></tr>
                <tr><td>27</td><td>7.8</td></tr>
                <tr><td>27</td><td>17.8</td></tr>
                <tr><td>39</td><td>31.4</td></tr>
                <tr><td>41</td><td>25.9</td></tr>
              </tbody>
            </table>
            <p>Which visualization is most suitable for examining the relationship between age and % fat?</p>
          </div>
        `,
        question: "Which graph is best for studying the relationship between age and body-fat percentage?",
        options: [
          "Scatter plot",
          "Pie chart",
          "Bar chart of one variable only",
          "Single-number summary"
        ],
          answerIndex: 0,
          explanation: "A scatter plot is the most direct way to inspect the relationship between two quantitative variables."
        },
        {
          questionHtml: `
            <div class="question-block">
              <p>A hospital recorded these 18 ages:</p>
              <table class="quiz-data-table">
                <tbody>
                  <tr><td>23, 23, 27, 27, 39, 41, 47, 49, 50</td></tr>
                  <tr><td>52, 54, 54, 56, 57, 58, 58, 60, 61</td></tr>
                </tbody>
              </table>
              <p>Which set is closest to the mean, median, and sample standard deviation of age?</p>
            </div>
          `,
          question: "Which set is closest to the mean, median, and sample standard deviation of age?",
          options: [
            "Mean 46.44, median 51, sample standard deviation 13.22",
            "Mean 51.00, median 46.44, sample standard deviation 8.10",
            "Mean 42.50, median 50, sample standard deviation 4.75",
            "Mean 46.44, median 49, sample standard deviation 21.30"
          ],
          answerIndex: 0,
          explanation: "For the 18 age values, the mean is about 46.44, the median is 51, and the sample standard deviation is about 13.22."
        },
        {
          questionHtml: `
            <div class="question-block">
              <p>The same hospital recorded these 18 body-fat percentages:</p>
              <table class="quiz-data-table">
                <tbody>
                  <tr><td>9.5, 26.5, 7.8, 17.8, 31.4, 25.9, 27.4, 27.2, 31.2</td></tr>
                  <tr><td>34.6, 42.5, 28.8, 33.4, 30.2, 34.1, 32.9, 41.2, 35.7</td></tr>
                </tbody>
              </table>
              <p>Which set is closest to the mean, median, and sample standard deviation of % fat?</p>
            </div>
          `,
          question: "Which set is closest to the mean, median, and sample standard deviation of body-fat percentage?",
          options: [
            "Mean 28.78, median 30.7, sample standard deviation 9.25",
            "Mean 30.70, median 28.78, sample standard deviation 5.10",
            "Mean 24.35, median 27.20, sample standard deviation 14.80",
            "Mean 28.78, median 31.40, sample standard deviation 3.92"
          ],
          answerIndex: 0,
          explanation: "For the 18 body-fat values, the mean is about 28.78, the median is 30.7, and the sample standard deviation is about 9.25."
        },
        {
          question: "Which plot is most suitable for comparing the distribution and spread of age and % fat separately?",
          options: [
            "Side-by-side boxplots",
            "A single pie chart",
            "A frequency table only",
            "A network diagram"
          ],
          answerIndex: 0,
          explanation: "Boxplots are well suited for comparing spread, quartiles, medians, and possible outliers across variables."
        },
        {
          question: "Which plot is especially useful when you want to compare one distribution with another distribution or a reference distribution?",
          options: [
            "Q-Q plot",
            "Stacked bar chart",
            "Decision tree",
            "Cube lattice"
          ],
          answerIndex: 0,
          explanation: "A Q-Q plot helps you compare how one distribution lines up against another distribution or a theoretical reference."
        },
        {
          questionHtml: `
            <div class="question-block">
              <p>Consider these two objects: (22, 1, 42, 10) and (20, 0, 36, 8).</p>
            <p>Which distance measure adds the absolute coordinate-wise differences?</p>
          </div>
        `,
        question: "Which measure sums the absolute differences between coordinates?",
        options: [
          "Manhattan distance",
          "Cosine similarity",
          "Correlation coefficient",
          "Mode"
        ],
        answerIndex: 0,
        explanation: "Manhattan distance is the sum of the absolute differences across coordinates."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>Use this 2-D dataset.</p>
            <table class="quiz-data-table">
              <thead>
                <tr><th>Object</th><th>A₁</th><th>A₂</th></tr>
              </thead>
              <tbody>
                <tr><td>x₁</td><td>1.5</td><td>1.7</td></tr>
                <tr><td>x₂</td><td>2.0</td><td>1.9</td></tr>
                <tr><td>x₃</td><td>1.6</td><td>1.8</td></tr>
                <tr><td>x₄</td><td>1.2</td><td>1.5</td></tr>
                <tr><td>x₅</td><td>1.5</td><td>1.0</td></tr>
              </tbody>
            </table>
            <p>Query point: x = (1.4, 1.6). Which object appears closest by Euclidean distance?</p>
          </div>
        `,
        question: "Which object is closest to the query point x = (1.4, 1.6) by Euclidean distance?",
        options: [
          "x₁",
          "x₂",
          "x₄",
          "x₅"
        ],
        answerIndex: 0,
        explanation: "x₁ = (1.5, 1.7) is only 0.1 away in each coordinate, making it the closest option here."
      },
      {
        question: "Which similarity measure is especially common for term-frequency vectors and sparse text data?",
        options: [
          "Cosine similarity",
          "Median",
          "Variance only",
          "Boxplot width"
        ],
        answerIndex: 0,
        explanation: "Cosine similarity is widely used for sparse vectors such as term-frequency representations in text mining."
      }
    ]
  },
  {
    id: 3,
    title: "Data Preprocessing",
    pages: "Chapter 3 | pp. 78-110",
    summary: "This chapter explains how to prepare data for mining. It covers data quality issues, cleaning, integration, reduction, transformation, and discretization so that mining algorithms can work more effectively.",
    topics: [
      "Why preprocessing is necessary",
      "Data cleaning and missing values",
      "Data integration and redundancy",
      "Data reduction methods",
      "Transformation, normalization, and discretization"
    ],
    flashcards: [
      { front: "Why is preprocessing necessary in data mining?", back: "Because real-world data is often incomplete, noisy, inconsistent, or too large for effective mining." },
      { front: "What is normalization?", back: "Normalization rescales numeric data so values are comparable across attributes or features." },
      { front: "What is data reduction?", back: "Data reduction decreases data volume while trying to preserve its essential analytical content." },
      { front: "What does discretization do?", back: "It converts continuous values into intervals or categories for easier analysis." },
      { front: "How is data quality described in Chapter 3?", back: "Data quality is discussed in terms of accuracy, completeness, consistency, timeliness, believability, and interpretability." },
      { front: "What is data cleaning?", back: "Data cleaning corrects missing values, noise, outliers, and inconsistencies so data becomes more reliable for mining." },
      { front: "How are missing values commonly handled?", back: "Common methods include ignoring tuples, filling in values manually, using a global constant, using the mean or median, or estimating values with more advanced methods." },
      { front: "What is data integration?", back: "Data integration combines data from multiple sources into one coherent store." },
      { front: "Why is redundancy a problem during integration?", back: "Redundant data can distort analysis, increase storage, and create misleading patterns if duplicate or strongly overlapping information is not detected." },
      { front: "What is data reduction?", back: "Data reduction produces a smaller representation of the data while trying to preserve the essential information content." },
      { front: "What is dimensionality reduction?", back: "Dimensionality reduction reduces the number of variables under consideration, often using methods such as principal components analysis." },
      { front: "What is numerosity reduction?", back: "Numerosity reduction replaces the original data with a smaller model or summary, such as regression models, clustering summaries, or histograms." },
      { front: "What is data compression?", back: "Data compression transforms the original data into a smaller form that is either lossless or lossy." },
      { front: "What is min-max normalization?", back: "Min-max normalization rescales values into a chosen interval, often from 0 to 1." },
      { front: "What is z-score normalization?", back: "Z-score normalization transforms values using the mean and standard deviation so the result shows how far a value is from the mean in standard deviation units." },
      { front: "What is normalization by decimal scaling?", back: "Decimal scaling moves the decimal point so that all normalized values fall within a small range." },
      { front: "What is smoothing by binning?", back: "Smoothing by binning groups sorted values into bins and smooths them using methods such as bin means, bin medians, or bin boundaries." },
      { front: "Why is smoothing useful?", back: "Smoothing reduces the effect of noise and can make patterns easier to detect." },
      { front: "What is a concept hierarchy?", back: "A concept hierarchy organizes data values from lower levels of detail to higher, more general levels." },
      { front: "How can concept hierarchies help data mining?", back: "They support mining at multiple levels of abstraction and help transform data into forms that reveal broader patterns." }
    ],
    quiz: [
      {
        question: "Which problem is data cleaning meant to handle?",
        options: ["Missing or noisy data", "Only final reporting", "Only user passwords", "Compiler warnings"],
        answerIndex: 0,
        explanation: "Data cleaning addresses missing values, noise, and inconsistencies."
      },
      {
        question: "What is a key goal of data integration?",
        options: [
          "Combining data from multiple sources consistently",
          "Deleting all records",
          "Drawing every chart by hand",
          "Replacing every attribute with text"
        ],
        answerIndex: 0,
        explanation: "Integration merges data sources while resolving redundancy and conflict."
      },
      {
        question: "Which technique is associated with data reduction?",
        options: ["Principal components analysis", "Keyboard layout selection", "Packet routing only", "Font rendering"],
        answerIndex: 0,
        explanation: "PCA is a classic reduction method that compresses information into fewer dimensions."
      },
      {
        question: "What is the purpose of normalization?",
        options: [
          "To put values on comparable scales",
          "To increase missing values",
          "To generate association rules directly",
          "To convert all numbers into words"
        ],
        answerIndex: 0,
        explanation: "Normalization makes features more comparable and often helps downstream learning algorithms."
      },
      {
        question: "Why might discretization be useful?",
        options: [
          "It can simplify continuous data into meaningful bins",
          "It removes all need for modeling",
          "It guarantees zero error",
          "It eliminates every outlier"
        ],
        answerIndex: 0,
        explanation: "Discretization can make patterns easier to detect and easier to interpret."
      },
      {
        question: "Which group best matches the data quality dimensions emphasized in Chapter 3?",
        options: [
          "Accuracy, completeness, consistency, timeliness, believability, and interpretability",
          "Speed, font size, color, sound, temperature, and battery life",
          "Mean, median, mode, variance, histogram, and quartile",
          "Only completeness and consistency"
        ],
        answerIndex: 0,
        explanation: "Chapter 3 treats data quality as multi-dimensional, not as a single property."
      },
      {
        question: "Which is a common way to handle missing values?",
        options: [
          "Fill them with a mean, median, constant, or estimated value",
          "Assume they never matter",
          "Convert all data to images",
          "Replace the whole dataset with one row"
        ],
        answerIndex: 0,
        explanation: "Missing values can be handled in several ways depending on the data and the task."
      },
      {
        question: "Why is redundancy detection important during data integration?",
        options: [
          "Because overlapping or duplicate information can distort analysis",
          "Because integration should always delete all attributes",
          "Because redundancy automatically improves every model",
          "Because redundant features are always independent"
        ],
        answerIndex: 0,
        explanation: "If redundancy is not handled, the combined dataset may overcount or misrepresent information."
      },
      {
        question: "Which statement best describes dimensionality reduction?",
        options: [
          "Reducing the number of variables while preserving useful information",
          "Replacing all numeric attributes with text",
          "Sorting values into alphabetical order only",
          "Deleting every record that has more than two attributes"
        ],
        answerIndex: 0,
        explanation: "Dimensionality reduction focuses on shrinking the variable space while keeping important structure."
      },
      {
        question: "Which method is a form of numerosity reduction?",
        options: [
          "Building a regression model or histogram summary",
          "Adding more duplicate rows",
          "Increasing the number of columns",
          "Splitting every value into characters"
        ],
        answerIndex: 0,
        explanation: "Numerosity reduction keeps a smaller summary or model instead of the full original data."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>Use this data for normalization:</p>
            <table class="quiz-data-table">
              <thead>
                <tr><th>Values</th></tr>
              </thead>
              <tbody>
                <tr><td>200, 300, 400, 600, 1000</td></tr>
              </tbody>
            </table>
            <p>Which min-max normalized value is correct for 600 when min = 0 and max = 1?</p>
          </div>
        `,
        question: "Which min-max normalized value is correct for 600 when using 200, 300, 400, 600, 1000 and the range [0, 1]?",
        options: [
          "0.50",
          "0.40",
          "0.75",
          "0.20"
        ],
        answerIndex: 0,
        explanation: "Using (600 - 200) / (1000 - 200) gives 400 / 800 = 0.50."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>Use this sorted data:</p>
            <table class="quiz-data-table">
              <thead>
                <tr><th>Values</th></tr>
              </thead>
              <tbody>
                <tr><td>5, 10, 11, 13, 15, 35, 50, 55, 72, 92, 204, 215</td></tr>
              </tbody>
            </table>
            <p>If the data is partitioned into three bins by equal-depth partitioning, how many values should each bin contain?</p>
          </div>
        `,
        question: "In equal-depth partitioning of 12 sorted values into 3 bins, how many values go into each bin?",
        options: [
          "4",
          "3",
          "5",
          "6"
        ],
        answerIndex: 0,
        explanation: "Equal-depth partitioning divides the data so each bin contains the same number of items: 12 / 3 = 4."
      },
      {
        question: "Which normalization method uses the mean and standard deviation?",
        options: [
          "z-score normalization",
          "Decimal scaling",
          "Equal-width partitioning",
          "Boxplot smoothing"
        ],
        answerIndex: 0,
        explanation: "z-score normalization uses the mean and standard deviation to rescale values."
      },
      {
        question: "What is the main idea of concept hierarchy generation?",
        options: [
          "Organizing values from detailed levels to more general levels",
          "Randomly reordering attributes",
          "Removing all categorical data",
          "Turning every value into a distance score"
        ],
        answerIndex: 0,
        explanation: "Concept hierarchies move from detailed values to broader conceptual levels."
      },
      {
        question: "Why is preprocessing still an active research area?",
        options: [
          "Because real-world data is often inconsistent or dirty and the problems are complex",
          "Because preprocessing has already been fully solved",
          "Because mining algorithms do not use input data",
          "Because only toy datasets are studied today"
        ],
        answerIndex: 0,
        explanation: "The size, messiness, and diversity of real-world data keep preprocessing as an important research challenge."
      }
    ]
  },
  {
    id: 4,
    title: "Data Warehousing and Online Analytical Processing",
    pages: "Chapter 4 | pp. 112-160",
    summary: "This chapter introduces data warehousing concepts and OLAP for multidimensional analysis. It explains warehouse architecture, dimensional models, schemas, OLAP operations, and implementation issues.",
    topics: [
      "Data warehouse concepts and architecture",
      "Multidimensional models and data cubes",
      "Star, snowflake, and fact constellation schemas",
      "OLAP operations",
      "Warehouse design and implementation"
    ],
    flashcards: [
      { front: "What is a data warehouse?", back: "A data warehouse is a subject-oriented, integrated, time-variant, and nonvolatile collection of data for decision support." },
      { front: "What is OLAP used for?", back: "OLAP supports interactive multidimensional analysis such as roll-up, drill-down, slice, and dice." },
      { front: "What is a star schema?", back: "A star schema organizes a central fact table connected to surrounding dimension tables." },
      { front: "What is the purpose of a data cube?", back: "A data cube models data across multiple dimensions for fast aggregation and analysis." },
      { front: "What does subject-oriented mean in a data warehouse?", back: "It means the warehouse is organized around major subjects such as customers, products, sales, or patients rather than around daily transactions." },
      { front: "What does integrated mean in a data warehouse?", back: "It means data from multiple sources is combined into a consistent format and structure." },
      { front: "What does time-variant mean in a data warehouse?", back: "It means the warehouse stores historical data over time so changes and trends can be analyzed." },
      { front: "What does nonvolatile mean in a data warehouse?", back: "It means data is relatively stable after loading and is not constantly updated like operational transaction data." },
      { front: "What is a three-tier data warehouse architecture?", back: "It includes a bottom warehouse database server, a middle OLAP server, and a top client layer for query and reporting tools." },
      { front: "What are warehouse metadata?", back: "Metadata describes warehouse structure, mappings, summaries, business terms, algorithms, and performance details." },
      { front: "What is a snowflake schema?", back: "A snowflake schema is a refinement of a star schema in which dimension tables are normalized into additional related tables." },
      { front: "What is a fact constellation schema?", back: "A fact constellation schema uses multiple fact tables that may share dimension tables." },
      { front: "What is a cuboid?", back: "A cuboid is one view or level of summarization in a data cube lattice." },
      { front: "What are concept hierarchies used for in OLAP and warehousing?", back: "They organize values into levels of abstraction and support roll-up, drill-down, and mining at multiple abstraction levels." },
      { front: "What is roll-up?", back: "Roll-up moves to a higher level of summarization in a data cube." },
      { front: "What is drill-down?", back: "Drill-down moves from summarized data to more detailed data." },
      { front: "What is slice-and-dice?", back: "Slice-and-dice selects and reorients subsets of cube data for analysis." },
      { front: "What is pivot or rotate in OLAP?", back: "Pivoting changes the orientation of the multidimensional view so users can inspect the same data from another angle." },
      { front: "What is ROLAP?", back: "ROLAP stores data in relational systems and maps OLAP operations to relational operations." },
      { front: "What is MOLAP?", back: "MOLAP stores multidimensional data directly in array-style structures for fast OLAP analysis." },
      { front: "What is HOLAP?", back: "HOLAP combines ROLAP and MOLAP so some data stays relational while some is stored in multidimensional form." },
      { front: "What is full materialization?", back: "Full materialization computes and stores all cuboids in the data cube lattice." },
      { front: "What is partial materialization?", back: "Partial materialization computes and stores only selected cuboids rather than every possible cuboid." },
      { front: "What is an iceberg cube?", back: "An iceberg cube stores only cube cells whose aggregate values pass a minimum threshold." },
      { front: "What is bitmap indexing?", back: "Bitmap indexing represents attribute values with bitmaps so joins, filters, and aggregations can be processed efficiently." },
      { front: "What is join indexing?", back: "Join indexing pre-registers joinable rows between related relations to speed up OLAP-style joins." },
      { front: "What is data generalization?", back: "Data generalization abstracts task-relevant data to higher conceptual levels." },
      { front: "What is concept description?", back: "Concept description summarizes data in a concise way and includes characterization and discrimination." },
      { front: "What is characterization?", back: "Characterization summarizes the general properties of a target class." },
      { front: "What is discrimination in concept description?", back: "Discrimination compares a target class with contrasting classes so their differences stand out." }
    ],
    quiz: [
      {
        question: "What is the main purpose of a data warehouse?",
        options: [
          "Decision support and analytical processing",
          "Typing essays only",
          "Replacing every operational system",
          "Drawing user interface icons"
        ],
        answerIndex: 0,
        explanation: "Data warehouses are built to support strategic analysis and decision making."
      },
      {
        question: "Which schema has one fact table and surrounding dimension tables?",
        options: ["Star schema", "Queue schema", "Binary schema", "Heap schema"],
        answerIndex: 0,
        explanation: "The star schema is the classic multidimensional warehouse structure."
      },
      {
        question: "Which is a common OLAP operation?",
        options: ["Drill-down", "Patch kernel", "Train battery", "Compile firmware"],
        answerIndex: 0,
        explanation: "Drill-down is an OLAP operation used to inspect data at finer granularity."
      },
      {
        question: "Why are dimensions important in a data cube?",
        options: [
          "They define perspectives for analysis",
          "They remove the need for facts",
          "They are only decorative labels",
          "They delete metadata"
        ],
        answerIndex: 0,
        explanation: "Dimensions organize data for analysis across perspectives such as time, location, or product."
      },
      {
        question: "Which warehouse idea supports historical analysis?",
        options: [
          "Time-variant storage",
          "Constant deletion",
          "Ignoring metadata",
          "Removing dimensions"
        ],
        answerIndex: 0,
        explanation: "Warehouses store historical data over time, which is essential for trend analysis."
      },
      {
        question: "Which description best matches the three-tier warehouse architecture?",
        options: [
          "Bottom warehouse database server, middle OLAP server, top client query and reporting layer",
          "Bottom printer server, middle battery controller, top keyboard monitor",
          "Three identical transaction databases only",
          "One flat file with no logical separation"
        ],
        answerIndex: 0,
        explanation: "The chapter presents a three-tier structure with storage, OLAP, and client layers."
      },
      {
        question: "What is the main difference between a star schema and a snowflake schema?",
        options: [
          "A snowflake schema normalizes dimension tables into additional related tables",
          "A star schema has no fact table",
          "A snowflake schema removes dimensions completely",
          "They are exactly the same in structure"
        ],
        answerIndex: 0,
        explanation: "A snowflake schema is a more normalized version of a star schema."
      },
      {
        question: "What is a fact constellation schema?",
        options: [
          "A schema with multiple fact tables that may share dimensions",
          "A schema with no dimensions at all",
          "A schema used only for transaction passwords",
          "A schema that stores only one numeric value"
        ],
        answerIndex: 0,
        explanation: "Fact constellation schemas support multiple related fact tables."
      },
      {
        question: "Which OLAP operation moves from a summarized level to a more detailed level?",
        options: [
          "Drill-down",
          "Roll-up",
          "Delete",
          "Compression"
        ],
        answerIndex: 0,
        explanation: "Drill-down reveals finer-grained detail from a more summarized view."
      },
      {
        question: "Which OLAP implementation stores multidimensional views directly in array structures?",
        options: [
          "MOLAP",
          "ROLAP",
          "HOLAP",
          "OLTP"
        ],
        answerIndex: 0,
        explanation: "MOLAP uses multidimensional storage structures directly."
      },
      {
        question: "What is the main advantage of HOLAP?",
        options: [
          "It combines strengths of relational and multidimensional storage",
          "It removes the need for dimensions",
          "It stores only text comments",
          "It guarantees zero storage cost"
        ],
        answerIndex: 0,
        explanation: "HOLAP mixes ROLAP and MOLAP so systems can balance flexibility and speed."
      },
      {
        question: "Why can full materialization become impractical?",
        options: [
          "Because storing all cuboids can require excessive space as dimensionality grows",
          "Because it always deletes raw data",
          "Because it allows only one query",
          "Because it removes concept hierarchies"
        ],
        answerIndex: 0,
        explanation: "Full materialization can suffer from the curse of dimensionality."
      },
      {
        question: "What does an iceberg cube keep?",
        options: [
          "Only cube cells whose aggregate values pass a threshold",
          "Only the coldest records",
          "Only text descriptions",
          "Only one dimension at a time"
        ],
        answerIndex: 0,
        explanation: "Iceberg cubes retain only aggregate cells considered significant enough by a threshold."
      },
      {
        question: "What is concept description made of?",
        options: [
          "Characterization and discrimination",
          "Compression and encryption",
          "Regression and clustering only",
          "Selection and deletion only"
        ],
        answerIndex: 0,
        explanation: "Concept description includes summarizing a class and contrasting it with another class."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>A data warehouse has dimensions <strong>time</strong>, <strong>doctor</strong>, and <strong>patient</strong>, and measures <strong>count</strong> and <strong>charge</strong>.</p>
            <p>Which schema type best matches a design with one central fact table and surrounding dimension tables?</p>
          </div>
        `,
        question: "Which schema type best matches one central fact table with surrounding dimensions time, doctor, and patient?",
        options: [
          "Star schema",
          "Binary tree schema",
          "Single-index schema",
          "Heap-only schema"
        ],
        answerIndex: 0,
        explanation: "A star schema places the fact table at the center and connects it to dimension tables."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>Start from the base cuboid <code>[day, doctor, patient]</code>.</p>
            <p>You want the total fee collected by each doctor in 2010. Which OLAP direction is essential?</p>
          </div>
        `,
        question: "From [day, doctor, patient], which OLAP direction is essential to summarize totals by doctor for 2010?",
        options: [
          "Roll-up on time from day toward year",
          "Drill-down on time below day",
          "Delete the doctor dimension",
          "Replace the fact table with metadata"
        ],
        answerIndex: 0,
        explanation: "You need to roll up the time dimension from day to year to summarize for 2010."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>A data warehouse has dimensions <strong>student</strong>, <strong>course</strong>, <strong>semester</strong>, and <strong>instructor</strong>, with measures <strong>count</strong> and <strong>avg_grade</strong>.</p>
            <p>Which schema best fits when dimension tables are normalized into multiple related tables?</p>
          </div>
        `,
        question: "Which schema best fits a warehouse where dimension tables are normalized into multiple related tables?",
        options: [
          "Snowflake schema",
          "Star schema",
          "Flat-file schema",
          "Bitmap-only schema"
        ],
        answerIndex: 0,
        explanation: "Snowflake schemas normalize dimensions into additional linked tables."
      }
    ]
  },
  {
    id: 5,
    title: "Data Cube Technology",
    pages: "Chapter 5 | pp. 162-204",
    summary: "This chapter examines how data cubes are computed and queried efficiently. It covers materialization strategies, cube computation methods, ranking and prediction cubes, and advanced cube exploration techniques.",
    topics: [
      "Cube materialization concepts",
      "Full, iceberg, closed, and shell cubes",
      "BUC, star-cubing, and multiway aggregation",
      "Top-k and ranking queries",
      "Prediction and multifeature cubes"
    ],
    flashcards: [
      { front: "What is cube materialization?", back: "Cube materialization is the precomputation and storage of cube aggregates to support faster querying." },
      { front: "What is an iceberg cube?", back: "An iceberg cube stores only cube cells whose aggregate values exceed a threshold." },
      { front: "Why are special cube computation methods needed?", back: "Because data cubes can become extremely large and computationally expensive in high dimensions." },
      { front: "What is the benefit of ranking cubes?", back: "They help answer top-k style questions efficiently in multidimensional data." },
      { front: "What is full materialization?", back: "Full materialization computes and stores all cuboids in the data cube lattice." },
      { front: "What is partial materialization?", back: "Partial materialization selectively computes and stores only some cuboids instead of all of them." },
      { front: "What is a shell fragment?", back: "A shell fragment precomputes only cuboids involving a small number of dimensions, while leaving additional combinations to be computed on demand." },
      { front: "What is the MultiWay method used for?", back: "MultiWay array aggregation computes full data cubes efficiently, especially for dense lower-dimensional data." },
      { front: "What is BUC used for?", back: "BUC computes iceberg cubes using bottom-up computation with partitioning and pruning." },
      { front: "What is Star-Cubing?", back: "Star-Cubing integrates top-down and bottom-up computation using a star-tree structure to compute iceberg cubes efficiently." },
      { front: "What is shell-fragment cubing?", back: "Shell-fragment cubing supports high-dimensional OLAP by precomputing partitioned shell fragments instead of the entire cube." },
      { front: "What is the curse of dimensionality in cube computation?", back: "As the number of dimensions grows, the number of possible cuboids and aggregate cells grows explosively, making computation and storage difficult." },
      { front: "What is a closed cube?", back: "A closed cube keeps only cells that are not redundant because no more specific cell has the same aggregate value." },
      { front: "What is multidimensional data mining in cube space?", back: "It integrates knowledge discovery with multidimensional cubes so analysts can mine data at multiple dimensions and granularities." },
      { front: "What is a prediction cube?", back: "A prediction cube stores predictive models in multidimensional cube space to support prediction at different granularities." },
      { front: "What is a multifeature cube?", back: "A multifeature cube supports queries involving multiple dependent aggregates across multiple granularities." },
      { front: "What is exception-based, discovery-driven exploration?", back: "It uses visual cues or significance ideas to highlight interesting exceptions at multiple aggregation levels." },
      { front: "What is a sampling cube?", back: "A sampling cube supports multidimensional analysis on sampled data so high-dimensional exploration becomes more efficient." },
      { front: "What is a ranking cube?", back: "A ranking cube supports efficient top-k and ranking-style queries in large multidimensional datasets." },
      { front: "What is a skyline query?", back: "A skyline query returns objects that are not dominated by any other object under the chosen preference dimensions." }
    ],
    quiz: [
      {
        question: "Why is cube materialization useful?",
        options: [
          "It speeds up multidimensional query processing",
          "It replaces flashcards",
          "It reduces every cube to one row",
          "It guarantees no storage cost"
        ],
        answerIndex: 0,
        explanation: "Precomputing aggregates allows faster OLAP and analytical querying."
      },
      {
        question: "What does an iceberg cube keep?",
        options: [
          "Only cells meeting a threshold condition",
          "Only frozen data",
          "Only missing values",
          "Only one-dimensional views"
        ],
        answerIndex: 0,
        explanation: "Iceberg cubes store only interesting aggregate cells that pass a support or threshold cutoff."
      },
      {
        question: "Why are efficient cube algorithms important?",
        options: [
          "Because the number of cube cells can explode with dimensionality",
          "Because cubes never get large",
          "Because dimensions are irrelevant",
          "Because SQL cannot use aggregates"
        ],
        answerIndex: 0,
        explanation: "The combinatorial growth of cube cells requires careful optimization."
      },
      {
        question: "What kind of question do ranking cubes support well?",
        options: ["Top-k queries", "Printer setup", "Compiler choice", "Window resizing"],
        answerIndex: 0,
        explanation: "Ranking cubes are designed to support efficient top-k and ranking analytics."
      },
      {
        question: "Which statement best describes data cube technology?",
        options: [
          "Scalable multidimensional aggregation and exploration",
          "Only image compression",
          "Only class labels",
          "Only sequence mining"
        ],
        answerIndex: 0,
        explanation: "Data cube technology focuses on computing, storing, and exploring multidimensional cube structures efficiently."
      },
      {
        question: "Which statement best describes partial materialization?",
        options: [
          "Only selected cuboids are computed and stored instead of all cuboids",
          "Every cuboid in the lattice is fully materialized",
          "No aggregates are ever stored",
          "Only one dimension is allowed in the cube"
        ],
        answerIndex: 0,
        explanation: "Partial materialization stores only some cuboids, helping reduce computation and storage cost."
      },
      {
        question: "What is the main idea of shell fragments?",
        options: [
          "Precompute cuboids with only a small number of dimensions and answer more complex combinations on demand",
          "Delete all high-dimensional data",
          "Replace the cube with a flat text file",
          "Store only raw transactions with no aggregation"
        ],
        answerIndex: 0,
        explanation: "Shell fragments avoid materializing every combination by keeping a useful subset ready."
      },
      {
        question: "Which method is especially associated with iceberg cube computation using bottom-up exploration?",
        options: [
          "BUC",
          "Naive Bayes",
          "k-means",
          "Principal components analysis"
        ],
        answerIndex: 0,
        explanation: "BUC is a classic bottom-up method for iceberg cube computation."
      },
      {
        question: "Which cube computation method uses a star-tree structure?",
        options: [
          "Star-Cubing",
          "MultiWay",
          "Decimal scaling",
          "ChiMerge"
        ],
        answerIndex: 0,
        explanation: "Star-Cubing combines top-down and bottom-up ideas using a star-tree structure."
      },
      {
        question: "Why are shell-fragment methods useful in high-dimensional OLAP?",
        options: [
          "They avoid precomputing the entire high-dimensional cube while still supporting important queries",
          "They remove all dimensions from the dataset",
          "They guarantee the cube becomes one-dimensional",
          "They replace aggregation with manual counting"
        ],
        answerIndex: 0,
        explanation: "Shell fragments reduce the burden of storing and computing every possible high-dimensional aggregate."
      },
      {
        question: "What does a closed cube try to keep?",
        options: [
          "Only nonredundant cells whose more specific descendants do not share the same measure value",
          "Only cells with missing values",
          "Only the base cuboid",
          "Only cells from one dimension"
        ],
        answerIndex: 0,
        explanation: "Closed cubes remove redundant aggregate cells while preserving important information."
      },
      {
        question: "What is a prediction cube designed to support?",
        options: [
          "Prediction at different aggregation levels in multidimensional space",
          "Only bitmap indexing",
          "Only warehouse refresh schedules",
          "Only transaction rollback"
        ],
        answerIndex: 0,
        explanation: "Prediction cubes organize predictive models within cube space so users can analyze predictions by granularity."
      },
      {
        question: "What is the main purpose of a ranking cube?",
        options: [
          "To support efficient top-k and ranking queries",
          "To replace all dimensions with ranks only",
          "To store only the smallest values",
          "To avoid all aggregation"
        ],
        answerIndex: 0,
        explanation: "Ranking cubes are built to answer top-k or ordered analytic questions efficiently."
      },
      {
        question: "What makes a skyline query special?",
        options: [
          "It returns objects that are not dominated by any other object across the chosen preference dimensions",
          "It returns only the oldest records",
          "It ignores all dimensions except one",
          "It always returns exactly ten objects"
        ],
        answerIndex: 0,
        explanation: "Skyline queries focus on non-dominated objects according to multiple preferences."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>A 10-D base cuboid contains only three base cells and the measure is <strong>count()</strong>.</p>
            <p>If the iceberg condition is <code>count ≥ 2</code>, what will happen to many very small aggregate regions?</p>
          </div>
        `,
        question: "With an iceberg condition count ≥ 2, what happens to many low-support aggregate cells?",
        options: [
          "They are pruned because they do not meet the threshold",
          "They must all be stored in full",
          "They automatically become closed cells",
          "They are converted into dimensions"
        ],
        answerIndex: 0,
        explanation: "Iceberg cube computation prunes cells that do not satisfy the minimum support condition."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>A company wants to analyze airline fares in a fully materialized travel cube with dimensions such as traveler, departure city, departure time, arrival time, and flight.</p>
            <p>To list average fare per month for business travelers flying one airline from one city in one year, what OLAP idea is most important?</p>
          </div>
        `,
        question: "To list average fare per month for a filtered travel cube scenario, which OLAP idea is most important?",
        options: [
          "Roll-up and slice-and-dice across the relevant dimensions",
          "Replacing the cube with a histogram only",
          "Deleting the time dimension completely",
          "Avoiding all aggregation"
        ],
        answerIndex: 0,
        explanation: "This kind of task requires filtering relevant dimensions and rolling data up to the month level."
      }
    ]
  },
  {
    id: 6,
    title: "Mining Frequent Patterns, Associations, and Correlations",
    pages: "Chapter 6 | pp. 206-232",
    summary: "This chapter introduces frequent pattern mining with market basket analysis as a motivating example. It covers itemsets, support and confidence, Apriori, pattern-growth ideas, and correlation-oriented analysis.",
    topics: [
      "Frequent itemsets and association rules",
      "Support and confidence",
      "Apriori and candidate generation",
      "Pattern-growth ideas",
      "Association versus correlation"
    ],
    flashcards: [
      { front: "What is a frequent itemset?", back: "A frequent itemset is a set of items that appears together in transactions often enough to meet a minimum support threshold." },
      { front: "What does support measure?", back: "Support measures how often an itemset appears in the data." },
      { front: "What does confidence measure in an association rule?", back: "Confidence measures how often the rule's conclusion is true when its condition is true." },
      { front: "What is the key idea of Apriori?", back: "If an itemset is frequent, then all of its subsets must also be frequent." },
      { front: "What is association rule mining?", back: "Association rule mining first finds frequent itemsets and then generates strong rules from them." },
      { front: "What is minimum support?", back: "Minimum support is the threshold that determines whether an itemset is frequent enough to keep." },
      { front: "What is minimum confidence?", back: "Minimum confidence is the threshold that determines whether an association rule is strong enough to keep." },
      { front: "Why are frequent patterns useful?", back: "Frequent patterns reveal items or events that often occur together and are useful in business analysis, marketing, and decision support." },
      { front: "What is FP-growth?", back: "FP-growth mines frequent itemsets without candidate generation by building and exploring a compressed FP-tree." },
      { front: "What is an FP-tree?", back: "An FP-tree is a compact prefix-tree structure that stores transaction information for frequent pattern growth." },
      { front: "What is vertical-format mining such as Eclat?", back: "Vertical-format mining represents items by the transaction IDs that contain them and mines patterns through TID-set intersections." },
      { front: "Why can support and confidence alone be misleading?", back: "Items may co-occur frequently without having a truly strong or interesting correlation." },
      { front: "What is a null-invariant measure?", back: "A null-invariant measure is not distorted by transactions that contain none of the studied items." },
      { front: "Why is the Kulczynski measure highlighted?", back: "Kulczynski is highlighted as a useful null-invariant measure for judging item relationships." },
      { front: "What is lift?", back: "Lift compares observed co-occurrence to what would be expected if the items were independent." },
      { front: "What is all-confidence?", back: "All-confidence is a pattern evaluation measure based on support relative to the most frequent participating item." },
      { front: "Why are partitioning and sampling useful Apriori variations?", back: "They can reduce the number of full database scans and improve mining efficiency on large datasets." }
    ],
    quiz: [
      {
        question: "What is the classic application used to explain association rules?",
        options: ["Market basket analysis", "Compiler testing", "Disk formatting", "Robot balancing"],
        answerIndex: 0,
        explanation: "Market basket analysis is the classic motivating example for frequent pattern mining."
      },
      {
        question: "What does support tell you?",
        options: [
          "How often an itemset occurs",
          "How visually attractive a rule is",
          "How fast memory is",
          "How many charts are available"
        ],
        answerIndex: 0,
        explanation: "Support measures frequency in the transaction database."
      },
      {
        question: "What is confidence in the rule A -> B?",
        options: [
          "The proportion of transactions with A that also contain B",
          "The total number of columns",
          "The number of clusters in A and B",
          "The variance of item counts"
        ],
        answerIndex: 0,
        explanation: "Confidence measures the conditional likelihood of B given A."
      },
      {
        question: "Why is Apriori pruning useful?",
        options: [
          "It cuts down the candidate search space",
          "It generates every pattern repeatedly",
          "It removes all thresholds",
          "It replaces support"
        ],
        answerIndex: 0,
        explanation: "Apriori uses the subset property to prune candidates efficiently."
      },
      {
        question: "Why is correlation analysis important in pattern mining?",
        options: [
          "Because frequent co-occurrence does not always imply meaningful dependence",
          "Because support is never useful",
          "Because itemsets cannot be compared",
          "Because databases ignore rules"
        ],
        answerIndex: 0,
        explanation: "Correlation helps distinguish meaningful relationships from patterns that are only frequent."
      },
      {
        question: "Which statement best describes the two-stage process of association rule mining?",
        options: [
          "Frequent itemsets are found first, then strong rules are generated from them",
          "Rules are generated first and frequent itemsets are skipped",
          "Only confidence is mined and support is ignored",
          "The database is sorted alphabetically before every rule is accepted"
        ],
        answerIndex: 0,
        explanation: "Association rule mining typically discovers frequent itemsets first and then generates rules that satisfy confidence requirements."
      },
      {
        question: "What is the main advantage of FP-growth over Apriori-like candidate generation?",
        options: [
          "It avoids costly candidate generation by using a compressed FP-tree",
          "It requires more full candidate generation",
          "It works only for one-item patterns",
          "It removes the need for support thresholds"
        ],
        answerIndex: 0,
        explanation: "FP-growth compresses the database into an FP-tree and mines patterns without generating huge candidate sets."
      },
      {
        question: "What is the main idea of vertical-format frequent pattern mining?",
        options: [
          "Represent items by TID sets and use intersections to compute support",
          "Convert transactions into cuboids only",
          "Replace all rules with regression lines",
          "Store every item as a bitmap index only"
        ],
        answerIndex: 0,
        explanation: "Vertical mining methods use transaction-ID sets and intersections to discover frequent itemsets."
      },
      {
        question: "Why are null-invariant measures useful in pattern evaluation?",
        options: [
          "They are not distorted by transactions that contain none of the studied items",
          "They guarantee every rule is strong",
          "They always make lift equal to 1",
          "They remove the need for support and confidence"
        ],
        answerIndex: 0,
        explanation: "Null-invariant measures avoid being overly affected by transactions that do not involve the target items."
      },
      {
        question: "Which measure is emphasized in this chapter together with imbalance ratio?",
        options: [
          "Kulczynski",
          "Median",
          "Variance",
          "Euclidean distance"
        ],
        answerIndex: 0,
        explanation: "The chapter recommends the Kulczynski measure together with imbalance ratio when presenting pattern relationships."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>A database has five transactions and uses <code>min_sup = 60%</code> and <code>min_conf = 80%</code>.</p>
            <table class="quiz-data-table">
              <thead>
                <tr><th>TID</th><th>Items bought</th></tr>
              </thead>
              <tbody>
                <tr><td>T100</td><td>{M, O, N, K, E, Y}</td></tr>
                <tr><td>T200</td><td>{D, O, N, K, E, Y}</td></tr>
                <tr><td>T300</td><td>{M, A, K, E}</td></tr>
                <tr><td>T400</td><td>{M, U, C, K, Y}</td></tr>
                <tr><td>T500</td><td>{C, O, O, K, I, E}</td></tr>
              </tbody>
            </table>
            <p>What support count is required for an itemset to be frequent?</p>
          </div>
        `,
        question: "With five transactions and min_sup = 60%, what support count is required for frequency?",
        options: [
          "3",
          "2",
          "4",
          "5"
        ],
        answerIndex: 0,
        explanation: "Sixty percent of five transactions is 3, so an itemset must appear in at least three transactions."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>Use the same five-transaction example.</p>
            <table class="quiz-data-table">
              <thead>
                <tr><th>TID</th><th>Items bought</th></tr>
              </thead>
              <tbody>
                <tr><td>T100</td><td>{M, O, N, K, E, Y}</td></tr>
                <tr><td>T200</td><td>{D, O, N, K, E, Y}</td></tr>
                <tr><td>T300</td><td>{M, A, K, E}</td></tr>
                <tr><td>T400</td><td>{M, U, C, K, Y}</td></tr>
                <tr><td>T500</td><td>{C, O, O, K, I, E}</td></tr>
              </tbody>
            </table>
            <p>Which single item is definitely frequent at this threshold?</p>
          </div>
        `,
        question: "Which single item is definitely frequent in the five-transaction example?",
        options: [
          "K",
          "A",
          "U",
          "D"
        ],
        answerIndex: 0,
        explanation: "K appears in all five transactions, so it clearly satisfies the minimum support threshold."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>A database has four transactions and uses <code>min_sup = 60%</code> and <code>min_conf = 80%</code>.</p>
            <table class="quiz-data-table">
              <thead>
                <tr><th>cust_ID</th><th>TID</th><th>items_bought</th></tr>
              </thead>
              <tbody>
                <tr><td>01</td><td>T100</td><td>{King's-Crab, Sunset-Milk, Dairyland-Cheese, Best-Bread}</td></tr>
                <tr><td>02</td><td>T200</td><td>{Best-Cheese, Dairyland-Milk, Goldenfarm-Apple, Tasty-Pie, Wonder-Bread}</td></tr>
                <tr><td>01</td><td>T300</td><td>{Westcoast-Apple, Dairyland-Milk, Wonder-Bread, Tasty-Pie}</td></tr>
                <tr><td>03</td><td>T400</td><td>{Wonder-Bread, Sunset-Milk, Dairyland-Cheese}</td></tr>
              </tbody>
            </table>
            <p>What support count is needed here for an itemset to satisfy the 60% minimum support threshold?</p>
          </div>
        `,
        question: "With four transactions and min_sup = 60%, what support count is required?",
        options: [
          "3",
          "2",
          "4",
          "1"
        ],
        answerIndex: 0,
        explanation: "Sixty percent of four is 2.4, so the minimum whole-number support count is three."
      },
      {
        question: "What prior knowledge does Apriori mainly use?",
        options: [
          "All nonempty subsets of a frequent itemset must also be frequent",
          "All supersets of an infrequent itemset must always be frequent",
          "Support always increases when itemsets get larger",
          "Confidence is independent of support"
        ],
        answerIndex: 0,
        explanation: "Apriori depends on the subset support property of frequent itemsets."
      },
      {
        question: "Why can a strong association rule still be uninteresting?",
        options: [
          "High support and confidence do not automatically imply meaningful correlation",
          "Every strong rule must be false",
          "Strong rules cannot be compared with measures",
          "Support eliminates the need for interpretation"
        ],
        answerIndex: 0,
        explanation: "A rule may be frequent and confident but still reflect a weak or misleading relationship."
      }
    ]
  },
  {
    id: 7,
    title: "Advanced Pattern Mining",
    pages: "Chapter 7 | pp. 234-269",
    summary: "This chapter expands frequent pattern mining into more complex settings, including multilevel and multidimensional patterns, constraint-based mining, colossal patterns, compressed patterns, and pattern applications.",
    topics: [
      "Multilevel and multidimensional associations",
      "Quantitative and rare pattern mining",
      "Constraint-based frequent pattern mining",
      "High-dimensional and colossal patterns",
      "Compressed and application-focused pattern exploration"
    ],
    flashcards: [
      { front: "What is multilevel association mining?", back: "It mines patterns at different concept levels, such as category, brand, and specific product levels." },
      { front: "What is constraint-based pattern mining?", back: "It uses user or data constraints to narrow the search space and focus on useful patterns." },
      { front: "Why are colossal patterns challenging?", back: "Because very large patterns can be difficult to generate, store, and interpret." },
      { front: "Why mine compressed patterns?", back: "Compressed patterns aim to summarize useful structure without listing every redundant pattern." },
      { front: "What is multidimensional association mining?", back: "Multidimensional association mining studies patterns involving more than one dimension, such as region, day, or time together with purchased items." },
      { front: "What are quantitative association rules?", back: "Quantitative association rules involve numeric or quantitative attributes rather than only simple item presence." },
      { front: "Why are rare patterns important?", back: "Rare patterns may capture unusual but valuable or risky events that frequent-pattern mining could overlook." },
      { front: "What are negative patterns?", back: "Negative patterns describe negatively correlated behavior, where the presence of one pattern is linked to the absence or reduced likelihood of another." },
      { front: "Why must negative pattern definitions be handled carefully?", back: "They must be handled carefully because null transactions and weak evidence can create misleading negative relationships." },
      { front: "What is anti-monotonicity in constraint-based mining?", back: "A constraint is anti-monotonic if once a pattern fails it, all supersets also fail it." },
      { front: "What is monotonicity in constraint-based mining?", back: "A constraint is monotonic if once a pattern satisfies it, all supersets also satisfy it." },
      { front: "What is succinctness in constraint-based mining?", back: "A succinct constraint can be enforced directly during candidate generation, helping prune the search very early." },
      { front: "Why are constraints useful in pattern mining?", back: "Constraints focus the mining process on patterns that match user goals and reduce wasted computation." },
      { front: "What is high-dimensional pattern mining?", back: "High-dimensional pattern mining studies pattern discovery when datasets have a very large number of dimensions or attributes." },
      { front: "What is a pattern-fusion method used for?", back: "Pattern-fusion methods help discover long or colossal patterns by combining and extending shorter patterns efficiently." },
      { front: "What are approximate patterns?", back: "Approximate patterns summarize structure while tolerating some noise or redundancy instead of insisting on exact matches." },
      { front: "What are semantic annotations for frequent patterns?", back: "Semantic annotations attach context, representative examples, and related meanings so users can better interpret discovered patterns." },
      { front: "Why does frequent pattern mining have many applications?", back: "Its ideas support tasks such as data cleaning, classification, clustering, outlier detection, and business analysis." }
    ],
    quiz: [
      {
        question: "What does multilevel pattern mining add?",
        options: [
          "Patterns at different abstraction levels",
          "Only bigger storage",
          "Only image annotations",
          "Only numeric regression"
        ],
        answerIndex: 0,
        explanation: "Multilevel mining studies patterns across concept hierarchies."
      },
      {
        question: "What is the benefit of constraint-based mining?",
        options: [
          "It focuses the search on patterns that satisfy user or problem constraints",
          "It removes all interestingness measures",
          "It guarantees no false patterns",
          "It ignores domain knowledge"
        ],
        answerIndex: 0,
        explanation: "Constraints reduce wasted effort and help target relevant patterns."
      },
      {
        question: "Why are rare patterns important?",
        options: [
          "They may capture unusual but valuable events",
          "They always have the highest support",
          "They replace all frequent patterns",
          "They only matter in graphics"
        ],
        answerIndex: 0,
        explanation: "Rare events can be critical in domains like fraud, security, or diagnosis."
      },
      {
        question: "What is one goal of compressed pattern mining?",
        options: [
          "Reduce redundancy while preserving useful information",
          "Delete all patterns",
          "Turn rules into images only",
          "Avoid user interpretation"
        ],
        answerIndex: 0,
        explanation: "Compressed pattern mining seeks concise but informative pattern sets."
      },
      {
        question: "Which statement best describes advanced pattern mining?",
        options: [
          "Extending pattern mining to richer spaces and constraints",
          "Only storing transactions",
          "Only text formatting",
          "Only sorting arrays"
        ],
        answerIndex: 0,
        explanation: "Advanced pattern mining generalizes basic frequent pattern mining to more challenging settings."
      },
      {
        question: "What does multidimensional association mining add beyond basic market-basket style mining?",
        options: [
          "It includes additional dimensions such as region, day, or time together with item information",
          "It removes all dimensions except one",
          "It only studies database schemas",
          "It turns every rule into a regression problem"
        ],
        answerIndex: 0,
        explanation: "Multidimensional association mining studies patterns involving more than one descriptive dimension."
      },
      {
        question: "What makes quantitative association rules different?",
        options: [
          "They involve numeric or quantitative attributes",
          "They only use text strings",
          "They ignore discretization completely",
          "They can never reveal exceptional behavior"
        ],
        answerIndex: 0,
        explanation: "Quantitative rules use numeric attributes and often rely on discretization or statistical treatment."
      },
      {
        question: "What is the main value of rare patterns?",
        options: [
          "They may reveal unusual but important events",
          "They always have the highest support",
          "They replace all frequent patterns",
          "They matter only in graphics"
        ],
        answerIndex: 0,
        explanation: "Rare patterns can be especially important in cases such as fraud, diagnosis, or exceptional events."
      },
      {
        question: "What is the main concern when mining negative patterns?",
        options: [
          "Null transactions and weak evidence can create misleading negative relationships",
          "Negative patterns are always stronger than positive ones",
          "Negative patterns never need evaluation",
          "They can only be mined with OLAP servers"
        ],
        answerIndex: 0,
        explanation: "Negative patterns require careful definition because null transactions can distort the apparent relationship."
      },
      {
        question: "What is the benefit of anti-monotonic constraints?",
        options: [
          "They allow strong pruning because if a pattern fails, all supersets fail too",
          "They force every candidate to be checked fully",
          "They make every pattern frequent",
          "They remove the need for user constraints"
        ],
        answerIndex: 0,
        explanation: "Anti-monotonicity is valuable because it lets the algorithm prune large parts of the search space."
      },
      {
        question: "Why are monotonic and succinct constraints useful?",
        options: [
          "They help push user constraints into the mining process earlier and reduce wasted computation",
          "They replace support thresholds completely",
          "They matter only after mining finishes",
          "They only apply to clustering tasks"
        ],
        answerIndex: 0,
        explanation: "Good constraint properties make it easier to incorporate user conditions efficiently during mining."
      },
      {
        question: "What is a major challenge in high-dimensional pattern mining?",
        options: [
          "The number of dimensions can be huge while useful structure may be sparse",
          "There are always too few candidate patterns",
          "Compression is impossible",
          "Distances always become more informative"
        ],
        answerIndex: 0,
        explanation: "High-dimensional spaces create combinatorial growth and often sparse, difficult search spaces."
      },
      {
        question: "Why mine compressed or approximate patterns?",
        options: [
          "To reduce redundancy while preserving useful structure",
          "To guarantee every exact pattern is listed separately",
          "To avoid all approximation in noisy data",
          "To remove the need for interpretation"
        ],
        answerIndex: 0,
        explanation: "Compressed and approximate patterns aim to return more manageable and still informative results."
      },
      {
        question: "What do semantic annotations add to frequent patterns?",
        options: [
          "Context, representative examples, and related meanings to help users interpret the patterns",
          "Only numeric support values",
          "Only transaction identifiers",
          "Nothing beyond candidate generation"
        ],
        answerIndex: 0,
        explanation: "Semantic annotations help explain patterns in ways that are easier for people to understand."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>A chain store wants to study how advertisement effectiveness depends on region, day-of-week, and time-of-day.</p>
            <p>Which mining direction best matches this need?</p>
          </div>
        `,
        question: "Which mining direction best fits analyzing advertisement effectiveness by region, day-of-week, and time-of-day?",
        options: [
          "Multidimensional and multilevel mining",
          "Single-item support counting only",
          "Only transaction sorting",
          "Only outlier deletion"
        ],
        answerIndex: 0,
        explanation: "This problem combines multiple descriptive dimensions and may also require analysis at different abstraction levels."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>The exercises discuss a table of rule constraints with columns for <strong>antimonotonic</strong>, <strong>monotonic</strong>, and <strong>succinct</strong>.</p>
            <p>Why is understanding these properties useful?</p>
          </div>
        `,
        question: "Why do antimonotonic, monotonic, and succinct properties matter in constraint-based mining?",
        options: [
          "They show how constraints can be pushed into the mining process to prune search early",
          "They only change visual formatting of rules",
          "They replace all support counting",
          "They matter only after the mining process is complete"
        ],
        answerIndex: 0,
        explanation: "These properties determine how effectively constraints can reduce the search space during mining."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>The exercises define a pattern distance between patterns based on their supporting transaction sets.</p>
            <p>What is the purpose of such a pattern distance measure?</p>
          </div>
        `,
        question: "What is the purpose of defining a distance between patterns?",
        options: [
          "To compare how similar or different patterns are so very similar ones can be grouped or compressed",
          "To replace support with Euclidean distance only",
          "To prevent any form of pattern compression",
          "To guarantee all patterns are independent"
        ],
        answerIndex: 0,
        explanation: "Pattern-distance measures help compare patterns and support compression or clustering of similar results."
      }
    ]
  },
  {
    id: 8,
    title: "Classification",
    pages: "Chapter 8 | pp. 271-321",
    summary: "This chapter presents the foundations of classification, including decision trees, Bayesian methods, rule-based models, evaluation, and ensemble techniques that improve predictive performance.",
    topics: [
      "What classification is and how models are built",
      "Decision tree induction",
      "Bayes classification methods",
      "Rule-based classification",
      "Evaluation, validation, and ensemble improvement"
    ],
    flashcards: [
      { front: "What is classification?", back: "Classification is supervised learning that predicts a discrete class label for new data based on labeled examples." },
      { front: "Why are decision trees popular?", back: "They are interpretable, easy to visualize, and can model decision rules by recursively splitting data." },
      { front: "What does Naive Bayes assume?", back: "It assumes conditional independence among attributes given the class." },
      { front: "Why is cross-validation useful?", back: "It estimates model performance more reliably by testing across multiple train-test splits." },
      { front: "What is numeric prediction?", back: "Numeric prediction estimates continuous-valued outputs, while classification predicts discrete class labels." },
      { front: "What is tree pruning?", back: "Tree pruning removes branches that may reflect noise so the tree generalizes better." },
      { front: "Why can a separate pruning set be a drawback?", back: "Using a separate pruning set reduces the amount of data available for learning the original tree." },
      { front: "What is a rule-based classifier?", back: "A rule-based classifier uses IF-THEN rules to assign class labels." },
      { front: "What is a confusion matrix?", back: "A confusion matrix summarizes classifier results in terms such as true positives, true negatives, false positives, and false negatives." },
      { front: "What is sensitivity or recall?", back: "Sensitivity, also called recall, measures the proportion of actual positives correctly identified." },
      { front: "What is specificity?", back: "Specificity measures the proportion of actual negatives correctly identified." },
      { front: "What is precision?", back: "Precision measures how many predicted positives are truly positive." },
      { front: "What is the F measure?", back: "The F measure is the harmonic mean of precision and recall." },
      { front: "What is an ROC curve?", back: "An ROC curve plots true positive rate against false positive rate to compare classifier behavior." },
      { front: "Why are significance tests useful in model comparison?", back: "They help determine whether observed performance differences are likely due to chance." },
      { front: "What is holdout evaluation?", back: "Holdout evaluation splits data into training and test sets and evaluates the model on unseen test data." },
      { front: "What is bootstrapping?", back: "Bootstrapping repeatedly samples data with replacement to estimate model behavior." },
      { front: "What is bagging?", back: "Bagging trains multiple models on sampled data and combines them to improve stability and accuracy." },
      { front: "What is boosting?", back: "Boosting builds a sequence of learners that focus more on previously misclassified examples." },
      { front: "What is a random forest?", back: "A random forest is an ensemble of decision trees built with randomness in sampling and attribute selection." },
      { front: "What is the class imbalance problem?", back: "Class imbalance occurs when the class of interest is represented by very few examples compared with the majority class." },
      { front: "How can class imbalance be addressed?", back: "Common strategies include oversampling, undersampling, threshold moving, and ensemble methods." }
    ],
    quiz: [
      {
        question: "What kind of learning problem is classification?",
        options: ["Supervised learning", "Unlabeled grouping only", "Pure storage", "Hardware control"],
        answerIndex: 0,
        explanation: "Classification uses labeled training data to predict class labels."
      },
      {
        question: "Which model is known for recursive splitting and interpretable rules?",
        options: ["Decision tree", "Data cube", "Histogram only", "Hash table"],
        answerIndex: 0,
        explanation: "Decision trees split data recursively based on attribute tests."
      },
      {
        question: "What is a common evaluation method for classifiers?",
        options: ["Cross-validation", "Wallpaper scaling", "Keyboard remapping", "Voltage tuning"],
        answerIndex: 0,
        explanation: "Cross-validation is widely used to estimate predictive performance."
      },
      {
        question: "Why are ensemble methods used?",
        options: [
          "To improve predictive accuracy by combining models",
          "To reduce the number of features to zero",
          "To store data permanently",
          "To remove all class labels"
        ],
        answerIndex: 0,
        explanation: "Methods like bagging, boosting, and random forests combine learners for stronger performance."
      },
      {
        question: "What does Naive Bayes rely on?",
        options: [
          "Conditional independence assumptions",
          "Mandatory tree visualization",
          "Only nearest neighbors",
          "Only unlabeled data"
        ],
        answerIndex: 0,
        explanation: "Naive Bayes assumes attributes contribute independently given the class."
      },
      {
        question: "What is the main role of pruning in decision tree induction?",
        options: [
          "To improve generalization by removing branches that may reflect noise",
          "To guarantee the tree becomes deeper",
          "To convert every tree into a histogram",
          "To remove the class labels from training data"
        ],
        answerIndex: 0,
        explanation: "Pruning helps reduce overfitting and can improve predictive accuracy on unseen data."
      },
      {
        question: "What is a drawback of using a separate pruning set?",
        options: [
          "It reduces the amount of data available for training the original tree",
          "It guarantees perfect accuracy",
          "It removes the need for testing",
          "It makes Naive Bayes impossible"
        ],
        answerIndex: 0,
        explanation: "When some data is reserved for pruning, less remains available to build the initial classifier."
      },
      {
        question: "What does a confusion matrix summarize?",
        options: [
          "True positives, true negatives, false positives, and false negatives",
          "Only mean and variance",
          "Only item supports",
          "Only cube dimensions"
        ],
        answerIndex: 0,
        explanation: "A confusion matrix organizes classification outcomes into correct and incorrect positive and negative cases."
      },
      {
        question: "Which measure is also called recall?",
        options: [
          "Sensitivity",
          "Specificity",
          "Lift",
          "Support"
        ],
        answerIndex: 0,
        explanation: "Sensitivity and recall refer to the proportion of actual positives that are correctly identified."
      },
      {
        question: "What does an ROC curve compare?",
        options: [
          "True positive rate against false positive rate",
          "Mean against median",
          "Support against confidence",
          "Entropy against variance"
        ],
        answerIndex: 0,
        explanation: "ROC curves help compare classifiers by plotting sensitivity against the false positive rate."
      },
      {
        question: "Why are ensemble methods such as bagging and boosting used?",
        options: [
          "To improve predictive performance by combining multiple learners",
          "To eliminate all class labels",
          "To replace all evaluation methods",
          "To avoid using training data"
        ],
        answerIndex: 0,
        explanation: "Ensemble methods combine the strengths of multiple models to improve overall accuracy and robustness."
      },
      {
        question: "What is the class imbalance problem?",
        options: [
          "The class of interest appears far less often than the majority class",
          "All classes appear equally often",
          "There are too many attributes in the dataset",
          "The test set is always larger than the training set"
        ],
        answerIndex: 0,
        explanation: "Class imbalance occurs when the important class is rare compared with the rest of the data."
      },
      {
        question: "Which is a common way to address class imbalance?",
        options: [
          "Oversampling, undersampling, threshold moving, or ensemble methods",
          "Deleting the minority class completely",
          "Ignoring false negatives",
          "Replacing classes with itemsets"
        ],
        answerIndex: 0,
        explanation: "Several methods can be used to reduce the harm caused by severe class imbalance."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>Consider the generalized employee training table below. The class label is <strong>status</strong>.</p>
            <table class="quiz-data-table">
              <thead>
                <tr><th>department</th><th>status</th><th>age</th><th>salary</th><th>count</th></tr>
              </thead>
              <tbody>
                <tr><td>sales</td><td>senior</td><td>31...35</td><td>46K...50K</td><td>30</td></tr>
                <tr><td>sales</td><td>junior</td><td>26...30</td><td>26K...30K</td><td>40</td></tr>
                <tr><td>systems</td><td>junior</td><td>21...25</td><td>46K...50K</td><td>20</td></tr>
                <tr><td>marketing</td><td>senior</td><td>36...40</td><td>46K...50K</td><td>10</td></tr>
                <tr><td>secretary</td><td>junior</td><td>26...30</td><td>26K...30K</td><td>6</td></tr>
              </tbody>
            </table>
            <p>Why is the <strong>count</strong> column important in this generalized training data?</p>
          </div>
        `,
        question: "Why is the count column important in generalized training tuples?",
        options: [
          "It tells how many original tuples are represented by each generalized row",
          "It is only a row number with no effect on learning",
          "It replaces the class label",
          "It is used only for chart coloring"
        ],
        answerIndex: 0,
        explanation: "In generalized data, one row may stand for many original tuples, so the count affects the learner's probabilities and decisions."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>For Naive Bayes classification, a tuple has values:</p>
            <p><code>department = systems, age = 26..., salary = 46K...50K</code></p>
            <p>What kind of computation does Naive Bayes mainly use to classify it?</p>
          </div>
        `,
        question: "What does Naive Bayes mainly compute when classifying a tuple?",
        options: [
          "Posterior probabilities for the possible class labels",
          "Only the Euclidean distance to all tuples",
          "Only a decision tree depth score",
          "Only the support of itemsets"
        ],
        answerIndex: 0,
        explanation: "Naive Bayes estimates the posterior probability of each class and predicts the most likely one."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>Tuples are sorted by decreasing classifier score:</p>
            <table class="quiz-data-table">
              <thead>
                <tr><th>Tuple #</th><th>Class</th><th>Probability</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>P</td><td>0.95</td></tr>
                <tr><td>2</td><td>N</td><td>0.85</td></tr>
                <tr><td>3</td><td>P</td><td>0.78</td></tr>
                <tr><td>4</td><td>P</td><td>0.66</td></tr>
                <tr><td>5</td><td>N</td><td>0.60</td></tr>
              </tbody>
            </table>
            <p>What kind of curve can be built by sweeping a threshold through these ranked scores?</p>
          </div>
        `,
        question: "What curve can be built by sweeping a threshold through ranked classifier scores?",
        options: [
          "ROC curve",
          "Pie chart",
          "Data cube lattice",
          "Minkowski curve"
        ],
        answerIndex: 0,
        explanation: "By changing the decision threshold across ranked scores, you can compute TPR and FPR points for an ROC curve."
      }
    ]
  },
  {
    id: 9,
    title: "Classification Methods Beyond the Basics",
    pages: "Chapter 9 | pp. 323-359",
    summary: "This chapter extends classification into Bayesian belief networks, neural networks, support vector machines, pattern-based classifiers, lazy learners, and additional advanced topics like transfer learning.",
    topics: [
      "Bayesian belief networks",
      "Backpropagation and neural networks",
      "Support vector machines",
      "Frequent-pattern-based classification",
      "k-nearest neighbors and advanced classification topics"
    ],
    flashcards: [
      { front: "What does a Bayesian belief network represent?", back: "It represents probabilistic dependencies among variables using a directed graphical model." },
      { front: "What is backpropagation used for?", back: "Backpropagation trains neural networks by propagating errors backward to update weights." },
      { front: "What is the core idea of support vector machines?", back: "SVMs aim to find a separating boundary with maximum margin between classes." },
      { front: "What makes k-nearest neighbors a lazy learner?", back: "It delays model construction until prediction time and uses nearby stored examples." },
      { front: "How do Bayesian belief networks differ from naive Bayes?", back: "Bayesian belief networks can model dependencies among attributes, while naive Bayes assumes conditional independence given the class." },
      { front: "Why can trained neural networks be hard to interpret?", back: "Their learned weights and hidden units can make the final decision process less transparent than simple rules or trees." },
      { front: "Why can SVMs be difficult on large datasets?", back: "SVM training can become slow and computationally expensive when the number of tuples is large." },
      { front: "What is associative classification?", back: "Associative classification builds classifiers from association rules generated from frequent patterns." },
      { front: "What is discriminative frequent pattern-based classification?", back: "It uses frequent patterns that help distinguish one class from another." },
      { front: "What is pattern-based classification?", back: "Pattern-based classification uses frequent patterns as features or combined predictive structures in a classifier." },
      { front: "What is an eager learner?", back: "An eager learner builds a general model first and then uses that model to classify new tuples." },
      { front: "What is a lazy learner?", back: "A lazy learner stores training examples and postpones generalization until a new query arrives." },
      { front: "How are genetic algorithms used in classification?", back: "They evolve populations of candidate rules or models through operations such as crossover and mutation." },
      { front: "What are rough sets used for in classification?", back: "Rough sets help approximate class boundaries when the available attributes do not clearly separate classes." },
      { front: "What are fuzzy sets used for in classification?", back: "Fuzzy sets replace hard cutoffs with gradual membership degrees, which can better model continuous-valued attributes." },
      { front: "How can binary classifiers support multiclass classification?", back: "Several binary classifiers can be combined into an ensemble framework to handle multiple classes." },
      { front: "What is semi-supervised classification?", back: "Semi-supervised classification learns from both labeled and unlabeled data when labeled examples are limited." },
      { front: "What is active learning?", back: "Active learning selects especially informative unlabeled examples and asks for labels to improve the classifier efficiently." },
      { front: "What is transfer learning?", back: "Transfer learning reuses knowledge learned from one or more source tasks to improve learning on a target task." }
    ],
    quiz: [
      {
        question: "Which model captures probabilistic relationships among variables in a graph?",
        options: ["Bayesian belief network", "Decision stump only", "Data cube", "Bitmap index"],
        answerIndex: 0,
        explanation: "Bayesian belief networks model dependencies probabilistically through a directed graph."
      },
      {
        question: "What is backpropagation mainly used for?",
        options: [
          "Training neural networks",
          "Compressing data cubes",
          "Cleaning missing values only",
          "Creating OLAP schemas"
        ],
        answerIndex: 0,
        explanation: "Backpropagation is the standard learning method for multilayer neural networks."
      },
      {
        question: "What does an SVM try to maximize?",
        options: ["The separating margin", "The number of dimensions", "The row count", "The histogram width"],
        answerIndex: 0,
        explanation: "SVMs seek a decision boundary with the largest possible margin."
      },
      {
        question: "Why is k-NN called a lazy learner?",
        options: [
          "Because it waits until query time to use training data",
          "Because it never uses data",
          "Because it must always use trees",
          "Because it only handles text"
        ],
        answerIndex: 0,
        explanation: "k-NN stores data and performs learning mainly when a new query arrives."
      },
      {
        question: "Which topic appears as an advanced issue in classification methods?",
        options: ["Transfer learning", "Bitmap join indexing", "Snowflake schema design", "Wavelet compression only"],
        answerIndex: 0,
        explanation: "Advanced classification methods include topics such as multiclass, semi-supervised, active, and transfer learning."
      },
      {
        question: "How do Bayesian belief networks improve on naive Bayes in many cases?",
        options: [
          "They can model dependencies among subsets of variables instead of assuming full conditional independence",
          "They remove all probabilities from classification",
          "They work only for unlabeled data",
          "They replace directed graphs with data cubes"
        ],
        answerIndex: 0,
        explanation: "Bayesian belief networks allow conditional dependencies among variables, unlike naive Bayes."
      },
      {
        question: "What is the main purpose of backpropagation in neural-network classification?",
        options: [
          "To update network weights by gradient-based error reduction",
          "To generate itemsets from transactions",
          "To prune decision trees only",
          "To compute Euclidean distance between tuples"
        ],
        answerIndex: 0,
        explanation: "Backpropagation adjusts weights to reduce prediction error in the neural network."
      },
      {
        question: "Why are support vector machines often considered highly accurate?",
        options: [
          "They can create strong separating boundaries, including for nonlinear data using transformations",
          "They always require no training",
          "They rely only on majority voting",
          "They classify only one attribute at a time"
        ],
        answerIndex: 0,
        explanation: "SVMs seek a maximum-margin separator and can be extended to nonlinear classification."
      },
      {
        question: "What is the difference between eager and lazy learners?",
        options: [
          "Eager learners build a general model first, while lazy learners delay generalization until query time",
          "Lazy learners always outperform eager learners",
          "Eager learners never use training data",
          "They are exactly the same except for storage format"
        ],
        answerIndex: 0,
        explanation: "Eager learners train first, while lazy learners wait and use stored instances at prediction time."
      },
      {
        question: "How are rough sets used in classification?",
        options: [
          "They approximate class definitions when exact separation is difficult with the available attributes",
          "They build FP-trees for itemsets",
          "They replace all probabilities with distances",
          "They are only used for clustering"
        ],
        answerIndex: 0,
        explanation: "Rough sets are useful when class boundaries cannot be defined crisply from the available features."
      },
      {
        question: "Why can fuzzy sets be useful for classification?",
        options: [
          "They allow gradual membership degrees instead of brittle hard thresholds",
          "They remove the need for class labels",
          "They always convert classification into regression",
          "They guarantee perfect interpretability"
        ],
        answerIndex: 0,
        explanation: "Fuzzy sets help model uncertainty and smooth boundaries for continuous-valued attributes."
      },
      {
        question: "Why is semi-supervised classification useful?",
        options: [
          "It can learn from both labeled and unlabeled data when labels are scarce",
          "It ignores labeled data completely",
          "It requires every class to be balanced",
          "It works only for binary trees"
        ],
        answerIndex: 0,
        explanation: "Semi-supervised methods take advantage of unlabeled data to improve learning when labeled data is limited."
      },
      {
        question: "What is the key idea of active learning?",
        options: [
          "Select especially informative examples and ask for their labels",
          "Label every example immediately without selection",
          "Avoid using any human feedback",
          "Replace supervised learning with clustering"
        ],
        answerIndex: 0,
        explanation: "Active learning reduces labeling cost by focusing on examples that can most improve the classifier."
      },
      {
        question: "What is transfer learning trying to do?",
        options: [
          "Reuse knowledge from source tasks to improve a target task",
          "Move transactions from one table to another",
          "Replace the target task completely",
          "Avoid all labeled data forever"
        ],
        answerIndex: 0,
        explanation: "Transfer learning uses learned knowledge from related tasks to improve performance on a new target task."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>Consider the generalized employee data table used again in Chapter 9.</p>
            <table class="quiz-data-table">
              <thead>
                <tr><th>department</th><th>status</th><th>age</th><th>salary</th><th>count</th></tr>
              </thead>
              <tbody>
                <tr><td>sales</td><td>senior</td><td>31...35</td><td>46K...50K</td><td>30</td></tr>
                <tr><td>sales</td><td>junior</td><td>26...30</td><td>26K...30K</td><td>40</td></tr>
                <tr><td>systems</td><td>junior</td><td>21...25</td><td>46K...50K</td><td>20</td></tr>
                <tr><td>systems</td><td>senior</td><td>31...35</td><td>66K...70K</td><td>5</td></tr>
                <tr><td>secretary</td><td>junior</td><td>26...30</td><td>26K...30K</td><td>6</td></tr>
              </tbody>
            </table>
            <p>In a neural-network design for this data, what role does the <strong>status</strong> attribute play?</p>
          </div>
        `,
        question: "In the employee table, what role does the status attribute play for classification?",
        options: [
          "It is the class label to be predicted",
          "It is only a numeric weight",
          "It replaces the department attribute",
          "It is ignored during learning"
        ],
        answerIndex: 0,
        explanation: "The exercise explicitly sets status as the class-label attribute."
      },
      {
        question: "Why might one compare associative classification with discriminative frequent pattern-based classification?",
        options: [
          "To understand different ways frequent patterns can be used to improve classification",
          "Because they are identical methods with different names only",
          "Because one of them does not use patterns at all",
          "Because neither method uses labeled data"
        ],
        answerIndex: 0,
        explanation: "The chapter discusses different pattern-based classification strategies and their relative strengths."
      },
      {
        question: "Why can a set of binary classifiers be useful in multiclass classification?",
        options: [
          "They can be combined into an error-correcting or ensemble framework to handle many classes",
          "They reduce every problem to one class only",
          "They eliminate the need for evaluation",
          "They work only when there are exactly two classes"
        ],
        answerIndex: 0,
        explanation: "Multiclass systems can often be built by combining several binary classifiers."
      }
    ]
  },
  {
    id: 10,
    title: "Cluster Analysis",
    pages: "Chapter 10 | pp. 361-402",
    summary: "This chapter introduces clustering as an unsupervised learning task. It covers partitioning, hierarchical, density-based, and grid-based methods as well as ways to evaluate clustering quality.",
    topics: [
      "What cluster analysis is and why it matters",
      "Partitioning methods like k-means and k-medoids",
      "Hierarchical clustering",
      "Density-based and grid-based clustering",
      "Clustering evaluation"
    ],
    flashcards: [
      { front: "What is clustering?", back: "Clustering groups objects so that those in the same cluster are more similar to one another than to those in other clusters." },
      { front: "How does k-means work at a high level?", back: "It assigns points to the nearest centroid and repeatedly updates centroids until convergence." },
      { front: "Why is DBSCAN notable?", back: "DBSCAN finds dense regions, can discover arbitrary shapes, and can identify noise." },
      { front: "Why is cluster evaluation important?", back: "Because clustering results need to be judged for quality, stability, and usefulness." },
      { front: "Why is clustering important in data mining?", back: "Clustering helps reveal structure in data and can be used both as a standalone task and as preprocessing for other mining methods." },
      { front: "What kind of learning task is clustering?", back: "Clustering is a form of unsupervised learning because it usually works without labeled target classes." },
      { front: "What is a partitioning method in clustering?", back: "A partitioning method divides the data into a fixed number of groups and improves the grouping iteratively." },
      { front: "What is k-medoids?", back: "k-medoids is a partitioning method that uses actual data objects as cluster representatives." },
      { front: "What is a hierarchical clustering method?", back: "A hierarchical clustering method builds a tree-like decomposition of data either bottom-up or top-down." },
      { front: "What is agglomerative clustering?", back: "Agglomerative clustering starts with individual objects and repeatedly merges them into larger clusters." },
      { front: "What is divisive clustering?", back: "Divisive clustering starts with all objects together and recursively splits them into smaller clusters." },
      { front: "What is a density-based method?", back: "A density-based method forms clusters as dense regions separated by areas of lower density." },
      { front: "What is a grid-based method?", back: "A grid-based method quantizes the data space into cells and performs clustering on the resulting grid structure." },
      { front: "What is STING?", back: "STING is a grid-based clustering method that uses statistical information stored in grid cells." },
      { front: "What is CLIQUE?", back: "CLIQUE is a grid-based and subspace clustering method designed for high-dimensional data." },
      { front: "What is OPTICS?", back: "OPTICS is a density-based method that captures the ordering structure of data and helps reveal clusters at different density levels." },
      { front: "What is BIRCH?", back: "BIRCH is a clustering method that incrementally builds and refines a clustering-feature tree to summarize large datasets." },
      { front: "What is PAM?", back: "PAM is a k-medoids-style clustering method that updates medoids by considering swaps between representatives and nonrepresentatives." },
      { front: "Why can k-means miss the global optimum?", back: "Because its result depends on initialization and local iterative updates, so it can converge to a local minimum." },
      { front: "Why is k-means++ useful?", back: "k-means++ chooses initial centers more carefully so convergence is often faster and the final clustering quality is usually better." },
      { front: "What is cluster evaluation?", back: "Cluster evaluation studies whether clustering is appropriate for the data and how good the resulting clusters are." },
      { front: "What is clustering tendency?", back: "Clustering tendency asks whether the dataset appears to contain meaningful cluster structure before clustering is applied." },
      { front: "What is constrained clustering?", back: "Constrained clustering produces clusters that must satisfy extra conditions such as size, distance, or obstacle-related constraints." }
    ],
    quiz: [
      {
        question: "What kind of learning task is clustering usually considered?",
        options: ["Unsupervised learning", "Supervised learning only", "Rule parsing", "Schema design"],
        answerIndex: 0,
        explanation: "Clustering generally works without labeled target classes."
      },
      {
        question: "Which method uses centroids as representatives?",
        options: ["k-means", "Apriori", "Naive Bayes", "OLAP roll-up"],
        answerIndex: 0,
        explanation: "k-means is a centroid-based partitioning method."
      },
      {
        question: "Which method is density-based?",
        options: ["DBSCAN", "Decision tree", "Cross-validation", "Snowflake schema"],
        answerIndex: 0,
        explanation: "DBSCAN defines clusters as dense connected regions."
      },
      {
        question: "What is a major challenge in clustering?",
        options: [
          "Determining cluster quality and structure",
          "Adding class labels manually",
          "Guaranteeing one perfect answer",
          "Avoiding all distance measures"
        ],
        answerIndex: 0,
        explanation: "Clustering often involves ambiguity, including the number and quality of clusters."
      },
      {
        question: "How is k-medoids different from k-means?",
        options: [
          "It uses representative objects instead of centroids",
          "It is a warehouse schema",
          "It only handles text files",
          "It needs class labels"
        ],
        answerIndex: 0,
        explanation: "k-medoids uses actual objects as cluster representatives."
      },
      {
        question: "Why is clustering useful even beyond standalone grouping?",
        options: [
          "It can also serve as a preprocessing step for other data mining tasks",
          "It is only useful after classification is complete",
          "It removes the need for all evaluation",
          "It can only be applied to text"
        ],
        answerIndex: 0,
        explanation: "Cluster analysis can be used directly or as preparation for later mining and analysis."
      },
      {
        question: "What is the key difference between agglomerative and divisive hierarchical clustering?",
        options: [
          "Agglomerative merges upward from single objects, while divisive splits downward from larger groups",
          "Agglomerative is supervised and divisive is unsupervised",
          "Agglomerative uses no distance measures",
          "Divisive always produces better clusters"
        ],
        answerIndex: 0,
        explanation: "Agglomerative and divisive methods differ in whether they build the hierarchy by merging or splitting."
      },
      {
        question: "What makes grid-based clustering methods different?",
        options: [
          "They quantize the data space into cells and cluster on the grid structure",
          "They always use centroids as representatives",
          "They require class labels",
          "They only work for one-dimensional data"
        ],
        answerIndex: 0,
        explanation: "Grid-based methods operate on a discretized grid rather than directly on individual points."
      },
      {
        question: "Why is DBSCAN attractive for many clustering tasks?",
        options: [
          "It can find arbitrarily shaped dense clusters and identify noise",
          "It requires class labels for every point",
          "It always returns exactly k clusters",
          "It ignores local density"
        ],
        answerIndex: 0,
        explanation: "DBSCAN is density-based and can discover clusters with irregular shapes while handling noise."
      },
      {
        question: "What is one reason BIRCH is useful on large datasets?",
        options: [
          "It incrementally summarizes data using a clustering-feature tree",
          "It replaces all distances with support counts",
          "It always finds arbitrary-shaped clusters perfectly",
          "It only works after FP-growth"
        ],
        answerIndex: 0,
        explanation: "BIRCH is designed to scale by compressing large datasets into a tree structure."
      },
      {
        question: "What is the main idea of k-means++?",
        options: [
          "Choose initial centers more carefully to improve convergence and quality",
          "Replace Euclidean distance with confidence",
          "Guarantee that clusters are hierarchical",
          "Use density thresholds instead of centers"
        ],
        answerIndex: 0,
        explanation: "k-means++ improves initialization, which often improves the final clustering result."
      },
      {
        question: "Why is cluster evaluation necessary?",
        options: [
          "Because clustering results may vary in quality, structure, and usefulness",
          "Because every clustering result is automatically correct",
          "Because evaluation is only needed for classification",
          "Because cluster counts never matter"
        ],
        answerIndex: 0,
        explanation: "Clustering is exploratory, so evaluation is essential for judging whether the result is meaningful."
      },
      {
        question: "What is constrained clustering?",
        options: [
          "Clustering that must satisfy extra conditions such as size, distance, or obstacle constraints",
          "Clustering without any parameters",
          "Clustering that always uses only medoids",
          "Clustering with no similarity measure"
        ],
        answerIndex: 0,
        explanation: "Constrained clustering incorporates additional rules or requirements into the clustering process."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>Suppose we cluster the points A₁(2,10), A₂(2,5), A₃(8,4), B₁(5,8), B₂(7,5), B₃(6,4), C₁(1,2), C₂(4,9).</p>
            <p>Euclidean distance is used, and the initial centers are A₁, B₁, and C₁. Which algorithm is being described?</p>
          </div>
        `,
        question: "Which clustering algorithm is described by iteratively assigning points to the nearest center and recomputing centers?",
        options: [
          "k-means",
          "Apriori",
          "Naive Bayes",
          "ROC analysis"
        ],
        answerIndex: 0,
        explanation: "This is the classic assignment-and-update structure of k-means."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>A clustering exercise asks for the pseudocode of the object reassignment step in PAM.</p>
            <p>What kind of representative does PAM use?</p>
          </div>
        `,
        question: "What kind of representative does PAM use for each cluster?",
        options: [
          "An actual data object called a medoid",
          "A synthetic average point only",
          "A class label",
          "A bitmap index"
        ],
        answerIndex: 0,
        explanation: "PAM is a k-medoids method, so each cluster is represented by an actual object."
      },
      {
        question: "Why can k-means be weaker than k-medoids in some settings?",
        options: [
          "k-means is more sensitive to outliers because centroids can be pulled by extreme values",
          "k-means cannot handle Euclidean distance",
          "k-medoids needs no parameters at all",
          "k-means always produces a hierarchy"
        ],
        answerIndex: 0,
        explanation: "Because centroids are averages, k-means can be more easily distorted by outliers than medoid-based methods."
      }
    ]
  },
  {
    id: 11,
    title: "Advanced Cluster Analysis",
    pages: "Chapter 11 | pp. 404-442",
    summary: "This chapter extends clustering to probabilistic, fuzzy, high-dimensional, graph-based, and constrained settings. It highlights the challenges that appear when clustering becomes more complex.",
    topics: [
      "Probabilistic and fuzzy clustering",
      "Expectation-maximization",
      "High-dimensional and subspace clustering",
      "Graph and network clustering",
      "Clustering with constraints"
    ],
    flashcards: [
      { front: "What is fuzzy clustering?", back: "Fuzzy clustering allows an object to belong to multiple clusters with different membership strengths." },
      { front: "What does EM do in model-based clustering?", back: "Expectation-Maximization iteratively estimates hidden assignments and updates model parameters." },
      { front: "Why is high-dimensional clustering hard?", back: "Because distance and similarity become less informative as dimensionality increases." },
      { front: "What are clustering constraints?", back: "Constraints are additional conditions such as must-link or cannot-link relationships that guide clustering." },
      { front: "What is probabilistic model-based clustering?", back: "It assumes each cluster is described by a parameterized probability distribution and estimates those parameters from the data." },
      { front: "What is a mixture model in clustering?", back: "A mixture model assumes the data is generated from several probabilistic clusters mixed together." },
      { front: "Why is EM important in mixture models?", back: "EM helps estimate hidden cluster memberships and update model parameters iteratively." },
      { front: "What is subspace clustering?", back: "Subspace clustering searches for clusters that exist only within subsets of dimensions rather than the full space." },
      { front: "What is dimensionality reduction clustering?", back: "It first maps data into a lower-dimensional space and then searches for clusters there." },
      { front: "What is biclustering?", back: "Biclustering clusters objects and attributes simultaneously, often finding coherent submatrices." },
      { front: "What is spectral clustering?", back: "Spectral clustering uses an affinity matrix and derived dimensions to reveal cluster structure." },
      { front: "Why is graph clustering important?", back: "Graph clustering is important because many real datasets, such as social networks, include connection structure that must be analyzed directly." },
      { front: "What is geodesic distance in a graph?", back: "Geodesic distance is the number of edges on the shortest path between two vertices." },
      { front: "What is SimRank?", back: "SimRank is a graph similarity measure based on structural context and random-walk-style reasoning." },
      { front: "What does modularity measure in graph clustering?", back: "Modularity measures how strongly a graph partition separates dense internal links from weaker external links." },
      { front: "What is SCAN?", back: "SCAN is a graph clustering algorithm that identifies well-connected components in graphs as clusters." },
      { front: "What is a hard constraint in clustering?", back: "A hard constraint must be strictly satisfied during the clustering process." },
      { front: "What is a soft constraint in clustering?", back: "A soft constraint expresses a preferred condition that may be violated at some cost." }
    ],
    quiz: [
      {
        question: "What is special about fuzzy clustering?",
        options: [
          "Objects can partially belong to multiple clusters",
          "Every object must belong to no cluster",
          "It only works on warehouses",
          "It ignores similarity"
        ],
        answerIndex: 0,
        explanation: "Fuzzy clustering uses soft membership rather than hard assignment."
      },
      {
        question: "What is the EM algorithm used for here?",
        options: [
          "Iterative probabilistic model fitting",
          "Sorting all records alphabetically",
          "Building fact tables",
          "Discretizing by binning only"
        ],
        answerIndex: 0,
        explanation: "EM alternates between estimating cluster assignments and updating model parameters."
      },
      {
        question: "Why are high-dimensional data difficult to cluster?",
        options: [
          "Distance behavior changes and useful structure can hide in subspaces",
          "There are always too few attributes",
          "No algorithms exist",
          "Visualization is impossible in principle"
        ],
        answerIndex: 0,
        explanation: "In high dimensions, many usual distance assumptions weaken, so specialized methods are needed."
      },
      {
        question: "What do must-link and cannot-link rules represent?",
        options: [
          "Clustering constraints",
          "Association support values",
          "OLAP operations",
          "Decision tree splits"
        ],
        answerIndex: 0,
        explanation: "These are common examples of clustering constraints."
      },
      {
        question: "Why cluster graph data differently from tabular data?",
        options: [
          "Because relationships and structure are part of the data itself",
          "Because graphs have no similarity",
          "Because graphs are always supervised",
          "Because graphs cannot be partitioned"
        ],
        answerIndex: 0,
        explanation: "Graph and network data include connection structure that must be modeled during clustering."
      },
      {
        question: "What does probabilistic model-based clustering assume about a cluster?",
        options: [
          "A cluster can be described by a parameterized probability distribution",
          "A cluster must always be a perfect sphere",
          "A cluster can contain only one dimension",
          "A cluster never overlaps with any other cluster under any model"
        ],
        answerIndex: 0,
        explanation: "Model-based clustering represents clusters through probabilistic models and estimates their parameters."
      },
      {
        question: "What is the role of a mixture model in clustering?",
        options: [
          "It models the data as being generated from multiple probabilistic clusters",
          "It forces every point into exactly one hard cluster with no uncertainty",
          "It replaces similarity with support counting",
          "It is used only for warehouse metadata"
        ],
        answerIndex: 0,
        explanation: "Mixture models describe data as arising from several component distributions."
      },
      {
        question: "Why is subspace clustering useful in high-dimensional data?",
        options: [
          "Clusters may exist only in selected subsets of dimensions",
          "High-dimensional data always has clear full-space clusters",
          "It removes all need for similarity measures",
          "It works only on one-dimensional data"
        ],
        answerIndex: 0,
        explanation: "Useful structure in high-dimensional data may hide in subspaces rather than the entire space."
      },
      {
        question: "What makes biclustering different from ordinary clustering?",
        options: [
          "It clusters objects and attributes at the same time",
          "It ignores the attributes completely",
          "It always requires class labels",
          "It can only be used for graph data"
        ],
        answerIndex: 0,
        explanation: "Biclustering searches for coherent groups of rows and columns simultaneously."
      },
      {
        question: "What is the key idea of spectral clustering?",
        options: [
          "Construct new dimensions from an affinity matrix and cluster in that transformed space",
          "Use only Euclidean centroids in the original space",
          "Replace clustering with regression",
          "Ignore all pairwise similarities"
        ],
        answerIndex: 0,
        explanation: "Spectral clustering uses affinity-based transformations to reveal hidden cluster structure."
      },
      {
        question: "What does geodesic distance measure in a graph?",
        options: [
          "The number of edges on the path between two vertices",
          "The average weight of all vertices",
          "The number of dimensions in a cluster",
          "The support count of a rule"
        ],
        answerIndex: 0,
        explanation: "Geodesic distance measures shortest-path separation in graph structure."
      },
      {
        question: "What is modularity used for in graph clustering?",
        options: [
          "To evaluate how well a graph partition separates dense internal connections from external ones",
          "To generate association rules from graphs",
          "To normalize salary values",
          "To compute support thresholds"
        ],
        answerIndex: 0,
        explanation: "Modularity is a common way to judge the quality of graph clusters."
      },
      {
        question: "What does SCAN try to identify in graph data?",
        options: [
          "Well-connected components as clusters",
          "Only the longest path in the graph",
          "Only isolated nodes",
          "Only itemset support counts"
        ],
        answerIndex: 0,
        explanation: "SCAN is a graph clustering method that looks for strongly connected structural regions."
      },
      {
        question: "What is the difference between hard and soft clustering constraints?",
        options: [
          "Hard constraints must be satisfied strictly, while soft constraints may be violated at some cost",
          "Hard constraints are always ignored, while soft constraints are mandatory",
          "Hard constraints only apply to OLAP, while soft constraints only apply to classification",
          "There is no difference between them"
        ],
        answerIndex: 0,
        explanation: "Hard constraints are strict requirements, whereas soft constraints are preferences or penalties."
      },
      {
        question: "Why might one compare SCAN with DBSCAN?",
        options: [
          "Both are density-oriented methods, but one is designed for graph structure while the other is usually applied to point data",
          "Because they are identical algorithms with identical inputs",
          "Because SCAN uses support and confidence",
          "Because DBSCAN can only be used in supervised learning"
        ],
        answerIndex: 0,
        explanation: "SCAN and DBSCAN share density ideas but are designed for different kinds of data structure."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>An exercise asks for a clustering method where the number of objects in each cluster must stay between specific lower and upper bounds.</p>
            <p>What kind of clustering setting is this?</p>
          </div>
        `,
        question: "If each cluster must contain between specific lower and upper numbers of objects, what kind of clustering problem is this?",
        options: [
          "Constrained clustering",
          "Purely unconstrained k-means only",
          "Association rule mining",
          "Simple histogram analysis"
        ],
        answerIndex: 0,
        explanation: "Cluster-size bounds are a direct example of clustering with constraints."
      }
    ]
  },
  {
    id: 12,
    title: "Outlier Detection",
    pages: "Chapter 12 | pp. 444-478",
    summary: "This chapter focuses on detecting exceptional or anomalous data points. It presents statistical, proximity-based, clustering-based, classification-based, contextual, collective, and high-dimensional outlier techniques.",
    topics: [
      "Definitions and types of outliers",
      "Statistical and proximity-based methods",
      "Clustering-based and classification-based approaches",
      "Contextual and collective outliers",
      "High-dimensional outlier detection"
    ],
    flashcards: [
      { front: "What is an outlier?", back: "An outlier is a data object that deviates significantly from the majority of the data." },
      { front: "What is a contextual outlier?", back: "A contextual outlier is unusual only when viewed relative to a specific context, such as time or location." },
      { front: "How can proximity-based methods detect outliers?", back: "They flag points that are far from neighbors or lie in sparse local regions." },
      { front: "Why is high-dimensional outlier detection difficult?", back: "Because unusual behavior may appear only in certain subspaces, and distances become less informative." },
      { front: "What is a global outlier?", back: "A global outlier is an object that deviates strongly from the whole dataset." },
      { front: "What is a collective outlier?", back: "A collective outlier is a group of objects that is unusual as a whole, even if the individual objects may not look extreme on their own." },
      { front: "Why can an object belong to more than one outlier type?", back: "An object may be unusual globally, contextually, or as part of a collective pattern depending on how the data is viewed." },
      { front: "What is a statistical outlier detection method?", back: "A statistical outlier method assumes normal data follows a model and treats data that does not fit the model as outlying." },
      { front: "What is a parametric outlier method?", back: "A parametric outlier method assumes the data follows a specific parameterized distribution." },
      { front: "What is a nonparametric outlier method?", back: "A nonparametric outlier method learns structure from data without assuming a fixed parametric distribution." },
      { front: "What is one example of a nonparametric outlier technique?", back: "Histogram-based methods and kernel density estimation are common nonparametric examples." },
      { front: "What is a distance-based outlier method?", back: "A distance-based outlier method treats an object as outlying if too few other objects fall within a chosen neighborhood radius." },
      { front: "What is a density-based outlier method?", back: "A density-based outlier method treats an object as outlying when its local density is much lower than that of its neighbors." },
      { front: "How do clustering-based outlier methods work?", back: "They assume normal objects belong to large or dense clusters, while outliers belong to small, sparse, or no clusters." },
      { front: "What is classification-based outlier detection?", back: "Classification-based outlier detection often builds a one-class model describing the normal class and flags nonmatching cases as outliers." },
      { front: "How is contextual outlier detection different?", back: "Contextual outlier detection uses contextual attributes so an object is judged unusual relative to a specific context." },
      { front: "Why are collective outliers challenging to detect?", back: "They depend on relationships among multiple objects, so the structure of the group must be modeled." },
      { front: "What is one major challenge in outlier detection design?", back: "A major challenge is choosing a data model that fits the application and separates meaningful anomalies from ordinary noise." },
      { front: "What is a challenge in outlier detection?", back: "A challenge is distinguishing true outliers from noise while still justifying why the detected objects are unusual." },
      { front: "Why can semi-supervised outlier detection be useful?", back: "It can use some labeled normal or outlier examples while still learning from a larger unlabeled dataset." },
      { front: "What is the advantage of using unlabeled objects in semi-supervised outlier detection?", back: "Unlabeled objects help the method learn the broader structure of the data instead of relying only on a small labeled sample." },
      { front: "Why can the border between normal objects and outliers be unclear?", back: "Many real datasets contain gradual change rather than a sharp cutoff, so some objects fall into a gray area." },
      { front: "Why can angle-based outlier detection be helpful in high-dimensional data?", back: "Angle-based ideas can remain informative when ordinary distances become less discriminative in high dimensions." }
    ],
    quiz: [
      {
        question: "Which statement best defines an outlier?",
        options: [
          "A point that deviates strongly from the rest of the data",
          "A guaranteed error in all cases",
          "A cube aggregate",
          "A cluster centroid"
        ],
        answerIndex: 0,
        explanation: "Outliers are unusual objects that stand apart from normal data behavior."
      },
      {
        question: "What makes a contextual outlier different?",
        options: [
          "Its unusualness depends on context",
          "It is always globally extreme",
          "It only appears in labels",
          "It must be frequent"
        ],
        answerIndex: 0,
        explanation: "Contextual outliers are abnormal relative to a context like season, time, or region."
      },
      {
        question: "Which family uses distances or neighborhoods?",
        options: ["Proximity-based methods", "OLAP methods", "Schema methods", "Rule-cover methods only"],
        answerIndex: 0,
        explanation: "Proximity-based methods use neighbor distance or density ideas."
      },
      {
        question: "Why is outlier detection valuable?",
        options: [
          "It can reveal fraud, faults, rare events, or novel behavior",
          "It removes all uncertainty",
          "It replaces every classifier",
          "It works only for images"
        ],
        answerIndex: 0,
        explanation: "Outliers often signal high-value events such as fraud, malfunction, or anomalies."
      },
      {
        question: "What challenge appears in high-dimensional outlier detection?",
        options: [
          "Interesting anomalies may exist only in subspaces",
          "Every point looks exactly the same",
          "No context is ever needed",
          "There are no methods for it"
        ],
        answerIndex: 0,
        explanation: "High-dimensional anomalies may be visible only in selected subspaces rather than full space."
      },
      {
        question: "What is the simplest form of outlier to understand conceptually?",
        options: [
          "A global outlier",
          "A collective outlier only",
          "A bicluster outlier",
          "A cuboid outlier"
        ],
        answerIndex: 0,
        explanation: "Global outliers are the simplest because they deviate directly from the whole dataset."
      },
      {
        question: "What makes a collective outlier different from a global outlier?",
        options: [
          "A collective outlier is unusual as a group even if individual objects may not be extreme by themselves",
          "A collective outlier always has the largest single distance from the origin",
          "A collective outlier can only occur in labeled data",
          "There is no difference between them"
        ],
        answerIndex: 0,
        explanation: "Collective outliers depend on relationships among objects rather than one object standing out alone."
      },
      {
        question: "What is the key assumption behind statistical outlier methods?",
        options: [
          "Normal data follows a model, and points that do not fit that model may be outliers",
          "Outliers can only be found using clustering",
          "There is no need to model normal behavior",
          "Every unusual value must be an error"
        ],
        answerIndex: 0,
        explanation: "Statistical methods compare objects with an assumed or learned model of normal data."
      },
      {
        question: "How does a density-based outlier method differ from a simple distance-based method?",
        options: [
          "It compares local density with the density around neighboring objects",
          "It ignores neighbors completely",
          "It uses only support and confidence",
          "It can only be applied to categorical data"
        ],
        answerIndex: 0,
        explanation: "Density-based methods emphasize relative local sparsity rather than only raw neighbor distance."
      },
      {
        question: "What is the basic idea of clustering-based outlier detection?",
        options: [
          "Normal objects belong to large or dense clusters, while outliers belong to small, sparse, or no clusters",
          "Outliers must always be cluster centroids",
          "Every cluster is an outlier",
          "Clustering-based methods require class labels"
        ],
        answerIndex: 0,
        explanation: "Cluster-based outlier methods use cluster structure to separate normal and abnormal behavior."
      },
      {
        question: "What is classification-based outlier detection often based on?",
        options: [
          "A one-class model describing normal data",
          "A star schema",
          "A confusion matrix only",
          "A histogram without any model"
        ],
        answerIndex: 0,
        explanation: "Classification-based outlier detection often learns what normal looks like and treats mismatches as outliers."
      },
      {
        question: "Why is distinguishing outliers from noise difficult?",
        options: [
          "Because some unusual values are important anomalies while others are just random variation or error",
          "Because all noise is automatically meaningful",
          "Because noise and outliers are always identical by definition",
          "Because noise can only appear in text data"
        ],
        answerIndex: 0,
        explanation: "Outlier detection must separate meaningful unusual behavior from random or uninformative noise."
      },
      {
        question: "Why can semi-supervised outlier detection be useful?",
        options: [
          "It can use some labeled normal or outlier examples together with additional unlabeled data",
          "It ignores all labels completely",
          "It guarantees no false alarms",
          "It only works for clustering"
        ],
        answerIndex: 0,
        explanation: "Semi-supervised methods are valuable when only limited labeled examples are available."
      },
      {
        question: "Why might angle-based outlier detection be preferred in some high-dimensional settings?",
        options: [
          "Because angle-based information can remain informative when ordinary distances become less discriminative",
          "Because angles replace all models and neighborhoods",
          "Because angle-based methods need no data",
          "Because they only work in one dimension"
        ],
        answerIndex: 0,
        explanation: "In high dimensions, distances can become less meaningful, while angle-based relationships may still reveal outliers."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>An exercise asks for an application where global, contextual, and collective outliers are all interesting.</p>
            <p>Which example best matches a contextual outlier?</p>
          </div>
        `,
        question: "Which example best matches a contextual outlier?",
        options: [
          "A temperature of 28°C in winter at a place where that would be highly unusual",
          "A random transaction ID",
          "A cluster centroid in k-means",
          "A frequent itemset with high support"
        ],
        answerIndex: 0,
        explanation: "A contextual outlier is unusual relative to a specific context such as season, location, or time."
      },
      {
        question: "What is one reason collective outlier detection may require background information?",
        options: [
          "Because the relationships among objects must be modeled to judge whether the group is unusual",
          "Because individual objects are always enough on their own",
          "Because collective outliers only occur in labeled data",
          "Because background information is never useful"
        ],
        answerIndex: 0,
        explanation: "Collective outliers depend on how objects relate to one another, not just on their individual values."
      },
      {
        question: "When the border between normal objects and outliers is unclear, what idea is most helpful?",
        options: [
          "Treating outlierness as a degree rather than forcing only a hard yes-or-no label",
          "Assuming every unusual point must be removed immediately",
          "Ignoring uncertainty completely",
          "Using only OLAP aggregation"
        ],
        answerIndex: 0,
        explanation: "Some applications need soft outlier scoring because unusualness can vary by degree rather than by a strict boundary."
      },
      {
        question: "Why can an equal-depth histogram be useful in simple outlier scoring?",
        options: [
          "It helps compare how crowded or sparse different value regions are",
          "It guarantees perfect labeling of all anomalies",
          "It replaces every density method automatically",
          "It can only be used for categorical data"
        ],
        answerIndex: 0,
        explanation: "Histogram bins provide a simple view of dense versus sparse regions, which can support basic outlier scoring."
      },
      {
        question: "What is the intuition behind the nested-loop distance-based outlier method?",
        options: [
          "Count how many nearby neighbors each object has and flag points with too few close neighbors",
          "Build a decision tree for every object",
          "Sort objects by chapter number",
          "Use only association rules"
        ],
        answerIndex: 0,
        explanation: "Distance-based outlier detection often checks whether an object has enough neighboring points within a chosen radius."
      },
      {
        question: "What problem can appear if local reachability density becomes zero or extremely small?",
        options: [
          "The outlier score can become unstable or artificially huge",
          "The method turns into regression automatically",
          "The data becomes supervised",
          "All objects receive the same score"
        ],
        answerIndex: 0,
        explanation: "Very small density values can make ratio-based local outlier scores unstable, which is why careful handling is needed."
      },
      {
        question: "If clusters form a hierarchy, what kind of outlier strategy is most useful?",
        options: [
          "A method that can detect outliers at multiple granularity levels",
          "A method that assumes only one flat partition exists",
          "A method that ignores cluster structure entirely",
          "A method that uses only labels"
        ],
        answerIndex: 0,
        explanation: "Hierarchical cluster settings may contain outliers that appear only at certain levels of granularity."
      },
      {
        question: "Why is using unlabeled objects an advantage in semi-supervised outlier detection?",
        options: [
          "They help reveal the broader structure of the data beyond the small labeled set",
          "They make labels unnecessary in every case",
          "They guarantee perfect outlier ranking",
          "They only matter for visualization"
        ],
        answerIndex: 0,
        explanation: "Unlabeled data can improve understanding of normal structure even when only a few labeled examples exist."
      },
      {
        question: "When might angle-based outlier detection fail to work well by itself?",
        options: [
          "When the data structure does not make angular differences informative enough to separate anomalies",
          "When the dataset has any numeric values at all",
          "When there are fewer than two objects",
          "When clustering is possible"
        ],
        answerIndex: 0,
        explanation: "Angle-based methods are heuristic, so they can struggle when angular relationships do not meaningfully separate abnormal from normal objects."
      }
    ]
  },
  {
    id: 13,
    title: "Data Mining Trends and Research Frontiers",
    pages: "Chapter 13 | pp. 481-514",
    summary: "This chapter looks forward. It covers mining complex data types, alternative methodologies, applications in different sectors, privacy and social impacts, and future trends in data mining research.",
    topics: [
      "Mining sequences, graphs, and other complex data",
      "Alternative foundations and methodologies",
      "Industry and scientific applications",
      "Privacy, security, and social impact",
      "Future trends and research directions"
    ],
    flashcards: [
      { front: "Why are complex data types a frontier in data mining?", back: "Because sequences, networks, multimedia, and other rich data types require specialized methods beyond basic tabular mining." },
      { front: "Why does privacy matter in data mining?", back: "Because mining can expose sensitive information and affect individuals and groups if used carelessly." },
      { front: "What is one example of a data mining application area?", back: "Applications include finance, retail, telecommunications, science, engineering, intrusion detection, and recommender systems." },
      { front: "Why study trends and research frontiers?", back: "Because the field evolves quickly, and new data types, methods, and social concerns shape future systems." },
      { front: "What are examples of complex data types in frontier mining?", back: "Examples include sequence data, graph and network data, spatiotemporal data, cyber-physical system data, multimedia data, web data, and data streams." },
      { front: "What is visual data mining?", back: "Visual data mining combines data mining with visualization so people can discover patterns, explore results, and interact with the mining process more effectively." },
      { front: "What is audio data mining?", back: "Audio data mining uses audio signals to indicate patterns or findings from data mining results." },
      { front: "Why are theoretical foundations important in data mining?", back: "Theoretical foundations help explain why methods work, clarify assumptions, and guide the design of stronger and more general mining systems." },
      { front: "What is privacy-preserving data mining?", back: "Privacy-preserving data mining aims to produce useful mining results without exposing sensitive underlying data." },
      { front: "Why are domain-specific data mining tools valuable?", back: "They combine domain knowledge with mining techniques so the tools solve real problems more effectively in a specific field." },
      { front: "What is ubiquitous data mining?", back: "Ubiquitous data mining refers to data mining embedded into everyday systems and services, often operating in the background while people work, shop, search, or communicate." },
      { front: "What is one example of ubiquitous data mining?", back: "Search engines, email systems, and recommendation features often use embedded mining behind the scenes." },
      { front: "Why do recommender systems matter in frontier applications?", back: "They personalize content or product suggestions and are a widely used example of data mining in practical systems." },
      { front: "What is one major social concern in modern data mining?", back: "A major concern is that mining may threaten privacy or data security if it is applied without proper safeguards." },
      { front: "Why are web, cloud, and service integration part of modern data mining trends?", back: "Because mining increasingly works across connected systems rather than in isolated databases, and modern applications rely on scalable online infrastructures." },
      { front: "Why are data streams an important trend?", back: "Data streams require mining methods that can handle continuous, changing, and fast-arriving data." },
      { front: "Why are social and information networks important frontier topics?", back: "They represent rich relationships among users, content, and actions, creating both new opportunities and new analytical challenges." },
      { front: "Why is bringing data mining research to market difficult?", back: "Real systems must balance accuracy, usability, cost, trust, privacy, and domain fit before research ideas become successful products." }
    ],
    quiz: [
      {
        question: "Which is an example of a complex data type discussed as a frontier?",
        options: ["Graphs and networks", "Only spreadsheets", "Only plain integers", "Only passwords"],
        answerIndex: 0,
        explanation: "Graphs, networks, sequences, and other complex data types are key frontier topics."
      },
      {
        question: "Why are privacy and security central issues in data mining?",
        options: [
          "Because mining can affect people through exposure, misuse, or unfair inferences",
          "Because data mining has no social effects",
          "Because privacy matters only in games",
          "Because algorithms never use personal data"
        ],
        answerIndex: 0,
        explanation: "The chapter emphasizes privacy, security, and broader social impact."
      },
      {
        question: "Which is listed as a practical data mining application area?",
        options: ["Recommender systems", "Bridge welding only", "Battery coloring", "Monitor polishing"],
        answerIndex: 0,
        explanation: "Recommender systems are a major application of data mining."
      },
      {
        question: "Why do research frontiers matter for learners?",
        options: [
          "They show where methods are expanding and where open problems remain",
          "They end the need for fundamentals",
          "They only repeat old content",
          "They remove the role of applications"
        ],
        answerIndex: 0,
        explanation: "Research frontiers reveal new directions, challenges, and opportunities in the field."
      },
      {
        question: "What broad message does the final discussion give about data mining?",
        options: [
          "Data mining keeps expanding in methods, applications, and societal importance",
          "Data mining is already complete and finished",
          "Only one algorithm matters now",
          "Future research is unnecessary"
        ],
        answerIndex: 0,
        explanation: "The final discussion highlights continued growth in methods, applications, and research questions."
      },
      {
        question: "Why is sequence data treated as an important frontier topic?",
        options: [
          "Because many real datasets involve order, time, or progression rather than isolated records",
          "Because sequence data can only appear in biology",
          "Because sequence mining replaces all graph mining",
          "Because sequence data never changes over time"
        ],
        answerIndex: 0,
        explanation: "Sequence mining matters because many applications depend on temporal or ordered behavior."
      },
      {
        question: "What is a main difference between visual data mining and ordinary data visualization?",
        options: [
          "Visual data mining combines mining and interactive visualization to help discover patterns, not just display data",
          "Visual data mining never uses interaction",
          "Visualization can only be used after mining is finished",
          "There is no difference at all"
        ],
        answerIndex: 0,
        explanation: "Visual data mining emphasizes using interaction and mining together so users can explore hidden structure."
      },
      {
        question: "Why might a social network need specialized mining methods?",
        options: [
          "Because the data includes rich relationships and network structure, not just independent rows",
          "Because social networks contain no attributes",
          "Because only classification matters in networks",
          "Because network data can always be treated like a tiny spreadsheet"
        ],
        answerIndex: 0,
        explanation: "Network data contains links and structure that call for specialized mining methods."
      },
      {
        question: "What is the goal of privacy-preserving data mining?",
        options: [
          "To discover useful patterns while protecting sensitive underlying information",
          "To block all analysis completely",
          "To publish every raw record openly",
          "To remove the need for data quality"
        ],
        answerIndex: 0,
        explanation: "Privacy-preserving data mining aims to keep results useful while reducing disclosure risk."
      },
      {
        question: "Why can domain-specific mining tools outperform generic ones in some applications?",
        options: [
          "Because they incorporate domain knowledge, constraints, and task-specific goals",
          "Because they never need data",
          "Because they avoid all modeling choices",
          "Because they only work for toy examples"
        ],
        answerIndex: 0,
        explanation: "Domain-specific tools can be more effective when they are built around the realities of a field."
      },
      {
        question: "What does ubiquitous data mining mean in practice?",
        options: [
          "Mining is embedded into everyday systems and services people use routinely",
          "Mining can only happen in research labs",
          "Mining happens only after business hours",
          "Mining is limited to one desktop database"
        ],
        answerIndex: 0,
        explanation: "Ubiquitous data mining refers to mining woven into ordinary digital experiences."
      },
      {
        question: "Why are data streams a special trend in data mining?",
        options: [
          "Because the data arrives continuously and methods must adapt quickly",
          "Because stream data is always small and static",
          "Because stream data removes privacy concerns",
          "Because stream mining needs no scalability"
        ],
        answerIndex: 0,
        explanation: "Data streams require online, adaptive, and efficient mining methods."
      },
      {
        question: "How is a recommender system different from a simple clustering system?",
        options: [
          "A recommender system focuses on suggesting relevant items or content to users, often using preference patterns",
          "A recommender system only counts how many clusters exist",
          "A recommender system cannot use historical data",
          "A recommender system is always identical to k-means"
        ],
        answerIndex: 0,
        explanation: "Recommender systems aim at personalized suggestions rather than only grouping similar records."
      },
      {
        question: "Why is bringing data mining research to market challenging?",
        options: [
          "Because useful products must balance technical quality, usability, trust, domain fit, and deployment reality",
          "Because research ideas always fail immediately",
          "Because industry never uses data mining",
          "Because only theory matters in products"
        ],
        answerIndex: 0,
        explanation: "Successful products need more than a strong algorithm: they also need usability, trust, fit, and operational value."
      },
      {
        questionHtml: `
          <div class="question-block">
            <p>A bank studies debit card usage patterns and contacts a customer with targeted loan information based on shopping behavior.</p>
            <p>What issue does this scenario most directly raise?</p>
          </div>
        `,
        question: "What issue is most directly raised when a bank uses transaction patterns to target a customer with financial offers?",
        options: [
          "Privacy and possible misuse of personal behavioral information",
          "Only Euclidean distance selection",
          "The need for clustering initialization only",
          "The impossibility of using mining in finance"
        ],
        answerIndex: 0,
        explanation: "This kind of targeted use raises privacy and fairness concerns because behavioral data may be used in intrusive ways."
      },
      {
        question: "What is one reason people still study theoretical foundations for data mining?",
        options: [
          "To explain core mining functions under a principled framework and identify where current ideas fall short",
          "To stop building practical systems",
          "To avoid all experimentation",
          "To replace applications with formulas only"
        ],
        answerIndex: 0,
        explanation: "Theoretical foundations help explain the field and reveal where stronger models or frameworks are needed."
      }
    ]
  }
];

const chapterCoverage = {
  1: [
    "Why data mining",
    "Moving toward the information age",
    "Evolution of information technology",
    "What is data mining",
    "Database data",
    "Data warehouses",
    "Transactional data",
    "Other kinds of data",
    "Class and concept description",
    "Frequent patterns associations and correlations",
    "Classification and regression",
    "Cluster analysis",
    "Outlier analysis",
    "Pattern interestingness",
    "Statistics",
    "Machine learning",
    "Database systems and data warehouses",
    "Information retrieval",
    "Business intelligence",
    "Web search engines",
    "Mining methodology",
    "User interaction",
    "Efficiency and scalability",
    "Data mining and society"
  ],
  2: [
    "Data objects and attribute types",
    "What is an attribute",
    "Nominal attributes",
    "Binary attributes",
    "Ordinal attributes",
    "Numeric attributes",
    "Discrete versus continuous attributes",
    "Mean median and mode",
    "Range quartiles variance standard deviation and interquartile range",
    "Graphic displays of statistical descriptions",
    "Pixel-oriented visualization",
    "Geometric projection visualization",
    "Icon-based visualization",
    "Hierarchical visualization",
    "Complex data and relation visualization",
    "Data matrix and dissimilarity matrix",
    "Proximity for nominal attributes",
    "Proximity for binary attributes",
    "Minkowski distance",
    "Proximity for ordinal attributes",
    "Dissimilarity for mixed types",
    "Cosine similarity"
  ],
  3: [
    "Data preprocessing overview",
    "Data quality",
    "Major preprocessing tasks",
    "Missing values",
    "Noisy data",
    "Data cleaning as a process",
    "Entity identification",
    "Redundancy and correlation analysis",
    "Tuple duplication",
    "Data value conflict detection and resolution",
    "Data reduction strategies",
    "Wavelet transforms",
    "Principal components analysis",
    "Attribute subset selection",
    "Regression and log-linear models",
    "Histograms",
    "Clustering for reduction",
    "Transformation strategies",
    "Normalization",
    "Discretization by binning",
    "Discretization by histogram analysis",
    "Concept hierarchy generation"
  ],
  4: [
    "What is a data warehouse",
    "Operational database versus data warehouse",
    "Why a separate data warehouse",
    "Multitiered architecture",
    "Enterprise warehouse data mart and virtual warehouse",
    "Metadata repository",
    "Data cube as multidimensional model",
    "Star snowflake and fact constellation schemas",
    "Concept hierarchies in dimensions",
    "Measure categorization and computation",
    "Typical OLAP operations",
    "Starnet query model",
    "Business analysis framework",
    "Warehouse design process",
    "Warehouse usage for information processing",
    "Efficient cube computation overview",
    "Bitmap index and join index",
    "Efficient processing of OLAP queries",
    "ROLAP MOLAP and HOLAP",
    "Attribute-oriented induction",
    "Data characterization",
    "Class comparisons"
  ],
  5: [
    "Cube materialization",
    "Full cube",
    "Iceberg cube",
    "Closed cube",
    "Cube shell",
    "Strategies for cube computation",
    "Multiway array aggregation",
    "BUC downward computation",
    "Star-cubing",
    "Shell fragments",
    "Sampling cubes",
    "Ranking cubes",
    "Top-k queries",
    "Prediction cubes",
    "Multifeature cubes",
    "Exception-based cube exploration",
    "Multidimensional analysis in cube space"
  ],
  6: [
    "Market basket analysis",
    "Frequent itemsets",
    "Closed itemsets",
    "Association rules",
    "Apriori algorithm",
    "Candidate generation",
    "Generating association rules",
    "Improving Apriori efficiency",
    "Pattern-growth approach",
    "Vertical data format",
    "Mining closed and max patterns",
    "Strong rules versus interesting rules",
    "Association analysis",
    "Correlation analysis",
    "Pattern evaluation measures"
  ],
  7: [
    "Pattern mining road map",
    "Multilevel associations",
    "Multidimensional associations",
    "Quantitative association rules",
    "Rare patterns",
    "Negative patterns",
    "Metarule-guided mining",
    "Constraint-based pattern generation",
    "Pruning pattern space",
    "Pruning data space",
    "High-dimensional data mining",
    "Colossal patterns",
    "Pattern-fusion",
    "Compressed pattern mining",
    "Pattern clustering",
    "Redundancy-aware top-k patterns",
    "Semantic annotation of frequent patterns",
    "Applications of pattern mining"
  ],
  8: [
    "What is classification",
    "General approach to classification",
    "Decision tree induction",
    "Attribute selection measures",
    "Tree pruning",
    "Scalability of decision trees",
    "Visual mining for decision tree induction",
    "Bayes theorem",
    "Naive Bayesian classification",
    "IF-THEN rules",
    "Rule extraction from decision trees",
    "Sequential covering algorithm",
    "Metrics for classifier performance",
    "Holdout method",
    "Random subsampling",
    "Cross-validation",
    "Bootstrap",
    "Statistical significance tests",
    "ROC curves",
    "Ensemble methods",
    "Bagging",
    "Boosting and AdaBoost",
    "Random forests",
    "Class-imbalanced data"
  ],
  9: [
    "Bayesian belief networks",
    "Concepts and mechanisms",
    "Training Bayesian belief networks",
    "Multilayer feed-forward neural network",
    "Network topology",
    "Backpropagation",
    "Interpretability of backpropagation",
    "Support vector machines",
    "Linearly separable case",
    "Linearly inseparable case",
    "Associative classification",
    "Discriminative frequent pattern classification",
    "k-nearest-neighbor classifiers",
    "Case-based reasoning",
    "Genetic algorithms",
    "Rough set approach",
    "Fuzzy set approaches",
    "Multiclass classification",
    "Semi-supervised classification",
    "Active learning",
    "Transfer learning"
  ],
  10: [
    "What is cluster analysis",
    "Requirements for cluster analysis",
    "Overview of basic clustering methods",
    "Partitioning methods",
    "k-means",
    "k-medoids",
    "Hierarchical methods",
    "Agglomerative clustering",
    "Divisive clustering",
    "Distance measures in clustering",
    "BIRCH",
    "Chameleon",
    "Probabilistic hierarchical clustering",
    "Density-based methods",
    "DBSCAN",
    "OPTICS",
    "DENCLUE",
    "Grid-based methods",
    "STING",
    "CLIQUE",
    "Assessing clustering tendency",
    "Determining number of clusters",
    "Measuring clustering quality"
  ],
  11: [
    "Probabilistic model-based clustering",
    "Fuzzy clusters",
    "Probabilistic model-based clusters",
    "Expectation-Maximization algorithm",
    "Clustering high-dimensional data",
    "Problems and challenges of high-dimensional clustering",
    "Subspace clustering methods",
    "Biclustering",
    "Types of biclusters",
    "Dimensionality reduction methods",
    "Spectral clustering",
    "Clustering graph data",
    "Clustering network data",
    "Similarity measures for graphs",
    "Graph clustering methods",
    "Clustering with constraints",
    "Constraint categorization",
    "Methods for clustering with constraints"
  ],
  12: [
    "Outliers and outlier analysis",
    "What are outliers",
    "Types of outliers",
    "Challenges of outlier detection",
    "Supervised semi-supervised and unsupervised methods",
    "Statistical methods",
    "Proximity-based methods",
    "Clustering-based methods",
    "Parametric methods",
    "Nonparametric methods",
    "Distance-based outlier detection",
    "Nested loop method",
    "Grid-based method",
    "Density-based outlier detection",
    "Classification-based approaches",
    "Contextual outlier detection",
    "Modeling normal behavior with contexts",
    "Collective outliers",
    "High-dimensional outliers",
    "Outliers in subspaces"
  ],
  13: [
    "Mining sequence data",
    "Time-series data",
    "Symbolic sequences",
    "Biological sequences",
    "Mining graphs and networks",
    "Mining other kinds of data",
    "Statistical data mining",
    "Foundations of data mining",
    "Visual and audio data mining",
    "Financial data analysis",
    "Retail and telecommunication applications",
    "Science and engineering applications",
    "Intrusion detection and prevention",
    "Recommender systems",
    "Ubiquitous and invisible data mining",
    "Privacy security and social impacts",
    "Data mining trends"
  ]
};

const chapterFacts = {
  1: [
    { concept: "data mining", definition: "the discovery of useful and interesting patterns from large data collections", purpose: "to turn large volumes of raw data into actionable knowledge", example: "finding meaningful patterns in customer transactions" },
    { concept: "KDD", definition: "the overall knowledge discovery process that includes cleaning, transformation, mining, and interpretation", purpose: "to organize the full path from raw data to usable knowledge", example: "preparing data before mining and then interpreting the discovered patterns" },
    { concept: "frequent pattern mining", definition: "the discovery of recurring relationships or item combinations in data", purpose: "to reveal regularities such as co-occurring events or products", example: "discovering that bread and milk are often bought together" },
    { concept: "classification", definition: "a predictive task that assigns data objects to predefined categories", purpose: "to build models that predict class labels for new cases", example: "predicting whether an email is spam or not spam" },
    { concept: "cluster analysis", definition: "the grouping of data objects so similar items fall into the same cluster", purpose: "to find structure in unlabeled data", example: "grouping customers into market segments without preexisting labels" },
    { concept: "outlier analysis", definition: "the detection of objects that deviate strongly from the majority of the data", purpose: "to identify rare, suspicious, or unusual behavior", example: "flagging a fraudulent credit-card transaction" }
  ],
  2: [
    { concept: "nominal attribute", definition: "an attribute whose values are names or categories without an inherent order", purpose: "to describe qualitative categories", example: "eye color or country name" },
    { concept: "ordinal attribute", definition: "an attribute whose categories have a meaningful order", purpose: "to rank or order values", example: "low, medium, and high" },
    { concept: "numeric attribute", definition: "an attribute measured as numbers that can support arithmetic operations", purpose: "to represent measurable quantities", example: "income, age, or temperature" },
    { concept: "central tendency", definition: "a summary of where data values are centered", purpose: "to describe the typical value of a distribution", example: "using the mean or median to summarize salaries" },
    { concept: "data visualization", definition: "the graphical display of data to reveal patterns and relationships", purpose: "to help analysts inspect trends, clusters, and anomalies", example: "using scatter plots or histograms before modeling" },
    { concept: "similarity measure", definition: "a measure of how alike two data objects are", purpose: "to support comparison and grouping of objects", example: "using cosine similarity to compare document vectors" }
  ],
  3: [
    { concept: "data cleaning", definition: "the process of detecting and correcting missing, noisy, or inconsistent data", purpose: "to improve data quality before mining", example: "filling missing age values or smoothing noisy sensor readings" },
    { concept: "data integration", definition: "the merging of data from multiple sources into a consistent store", purpose: "to create a unified view for analysis", example: "combining sales records from separate branch databases" },
    { concept: "data reduction", definition: "the reduction of data volume while preserving the important analytical content", purpose: "to make mining faster and more efficient", example: "using principal components analysis to reduce dimensions" },
    { concept: "normalization", definition: "the rescaling of numeric values to a common range or distribution", purpose: "to make attributes comparable for mining algorithms", example: "scaling exam scores to the interval from zero to one" },
    { concept: "discretization", definition: "the conversion of continuous values into intervals or categories", purpose: "to simplify data and support pattern discovery", example: "turning ages into child, adult, and senior groups" },
    { concept: "entity identification", definition: "the task of determining when records from different sources refer to the same real-world object", purpose: "to avoid duplication and integration errors", example: "matching two customer records that belong to the same person" }
  ],
  4: [
    { concept: "data warehouse", definition: "a subject-oriented, integrated, time-variant, and nonvolatile collection of data for decision support", purpose: "to support analysis and strategic decision making", example: "a company warehouse that stores historical sales by region and time" },
    { concept: "OLAP", definition: "online analytical processing for interactive multidimensional analysis", purpose: "to explore data at different levels of detail", example: "drill-down from yearly sales to monthly sales" },
    { concept: "data cube", definition: "a multidimensional model that organizes data by dimensions and measures", purpose: "to support fast aggregation and analysis", example: "analyzing sales by product, location, and time" },
    { concept: "star schema", definition: "a schema with a central fact table linked to surrounding dimension tables", purpose: "to model multidimensional warehouse data efficiently", example: "a sales fact table connected to product, store, and time dimensions" },
    { concept: "drill-down", definition: "an OLAP operation that moves from summarized data to finer detail", purpose: "to inspect lower-level granularity", example: "moving from yearly revenue to quarterly revenue" },
    { concept: "attribute-oriented induction", definition: "a method that generalizes data by climbing concept hierarchies", purpose: "to summarize data for characterization or comparison", example: "generalizing city values to state or country values" }
  ],
  5: [
    { concept: "cube materialization", definition: "the precomputation and storage of cube aggregates", purpose: "to speed up multidimensional query processing", example: "storing precomputed sales totals for common dimension combinations" },
    { concept: "iceberg cube", definition: "a cube that stores only aggregate cells meeting a threshold", purpose: "to reduce storage and focus on important results", example: "keeping only sales combinations whose totals exceed a minimum value" },
    { concept: "closed cube", definition: "a compact cube representation that removes redundant aggregate cells", purpose: "to preserve information with less redundancy", example: "keeping only nonredundant summaries from a large cube" },
    { concept: "BUC", definition: "a top-down method for computing iceberg cubes", purpose: "to compute only useful cube cells efficiently", example: "recursively partitioning dimensions while pruning low-support groups" },
    { concept: "ranking cube", definition: "a cube structure used to answer top-k style analytical queries", purpose: "to efficiently find the highest ranked aggregates", example: "finding the top ten products by region" },
    { concept: "prediction cube", definition: "a cube used for predictive analysis in multidimensional space", purpose: "to combine aggregation with prediction tasks", example: "predicting future sales across product and region dimensions" }
  ],
  6: [
    { concept: "frequent itemset", definition: "a set of items that appears together often enough to satisfy a support threshold", purpose: "to identify common patterns in transaction data", example: "bread and milk appearing together in many baskets" },
    { concept: "support", definition: "the proportion or count of transactions containing a pattern", purpose: "to measure how common a pattern is", example: "a rule appearing in twenty percent of transactions" },
    { concept: "confidence", definition: "the conditional probability that the rule conclusion is true when the premise is true", purpose: "to measure the strength of an association rule", example: "if customers buy bread they also buy butter seventy percent of the time" },
    { concept: "Apriori", definition: "a frequent itemset mining algorithm based on candidate generation and subset pruning", purpose: "to reduce the search space for association analysis", example: "discarding candidate itemsets whose subsets are not frequent" },
    { concept: "pattern-growth mining", definition: "a method that grows frequent patterns without generating large candidate sets", purpose: "to improve mining efficiency", example: "using prefix-based growth instead of repeated candidate generation" },
    { concept: "correlation analysis", definition: "the evaluation of whether items are meaningfully related rather than merely frequent", purpose: "to separate useful associations from misleading co-occurrence", example: "checking whether two products are truly linked rather than just individually popular" }
  ],
  7: [
    { concept: "multilevel association mining", definition: "the discovery of associations across different abstraction levels in a concept hierarchy", purpose: "to reveal patterns from broad categories down to specific items", example: "finding patterns at the dairy level and also at the cheese brand level" },
    { concept: "multidimensional association mining", definition: "the mining of rules involving multiple dimensions or attributes", purpose: "to capture richer relationships than single transaction items alone", example: "linking age group, income range, and purchase behavior" },
    { concept: "quantitative association rule", definition: "an association rule involving numeric ranges or quantities", purpose: "to mine patterns from numeric data", example: "customers aged twenty to thirty with income in a specific range often buy laptops" },
    { concept: "constraint-based mining", definition: "pattern mining guided by user or data constraints", purpose: "to focus discovery on patterns that matter to the user", example: "mining only rules that include a product category of interest" },
    { concept: "colossal pattern", definition: "a very large frequent pattern that contains many items", purpose: "to study large and potentially meaningful complex associations", example: "a long gene pattern discovered across biological data" },
    { concept: "compressed pattern", definition: "a compact representation that summarizes many related patterns", purpose: "to reduce redundancy in discovered results", example: "storing a concise cluster of similar frequent patterns instead of every variant" }
  ],
  8: [
    { concept: "decision tree", definition: "a tree-structured classifier built by recursively splitting data on attributes", purpose: "to produce interpretable predictive rules", example: "splitting loan applicants by income and debt to predict default risk" },
    { concept: "attribute selection measure", definition: "a criterion used to choose the best attribute for a decision tree split", purpose: "to create effective tree branches", example: "using information gain to decide the next split" },
    { concept: "tree pruning", definition: "the removal of branches that do not improve generalization", purpose: "to reduce overfitting in decision trees", example: "cutting small unreliable branches after training" },
    { concept: "naive Bayes", definition: "a Bayesian classifier that assumes conditional independence among attributes given the class", purpose: "to classify efficiently using probability", example: "predicting email spam based on word frequencies" },
    { concept: "cross-validation", definition: "an evaluation method that repeatedly splits data into training and testing folds", purpose: "to estimate classifier performance reliably", example: "ten-fold cross-validation for comparing models" },
    { concept: "random forest", definition: "an ensemble of decision trees built on random data samples and feature subsets", purpose: "to improve predictive accuracy and robustness", example: "combining many trees to classify medical cases" }
  ],
  9: [
    { concept: "Bayesian belief network", definition: "a directed probabilistic graphical model showing dependencies among variables", purpose: "to reason under uncertainty with linked variables", example: "modeling how symptoms and diseases influence one another" },
    { concept: "backpropagation", definition: "a learning algorithm that updates neural network weights by propagating prediction error backward", purpose: "to train multilayer neural networks", example: "adjusting a network after a wrong handwritten digit prediction" },
    { concept: "support vector machine", definition: "a classifier that seeks a separating hyperplane with maximum margin", purpose: "to classify data with strong separation ability", example: "separating two classes of documents in feature space" },
    { concept: "associative classification", definition: "a classification method that uses association rules whose consequents are class labels", purpose: "to combine pattern mining with prediction", example: "rules like high income and low debt imply low risk" },
    { concept: "k-nearest neighbors", definition: "a classifier that labels an object according to the classes of nearby stored examples", purpose: "to predict using local similarity", example: "classifying a new point by the majority label of its nearest neighbors" },
    { concept: "transfer learning", definition: "the reuse of knowledge from one task or domain in another related task", purpose: "to improve learning when new labeled data is limited", example: "adapting a model trained in one domain to a similar new domain" }
  ],
  10: [
    { concept: "cluster analysis", definition: "the grouping of objects so members of the same cluster are similar to each other", purpose: "to reveal structure in unlabeled data", example: "grouping shoppers into natural segments" },
    { concept: "k-means", definition: "a partitioning algorithm that represents each cluster by its centroid", purpose: "to form clusters by minimizing within-cluster variation", example: "iteratively updating centroids for customer groups" },
    { concept: "k-medoids", definition: "a partitioning algorithm that uses actual data objects as cluster representatives", purpose: "to reduce sensitivity to outliers compared with centroid methods", example: "choosing representative objects instead of average points" },
    { concept: "hierarchical clustering", definition: "a clustering strategy that builds a hierarchy of nested clusters", purpose: "to study cluster structure at multiple levels", example: "forming a dendrogram by repeatedly merging closest groups" },
    { concept: "DBSCAN", definition: "a density-based algorithm that finds connected dense regions and labels sparse points as noise", purpose: "to discover arbitrarily shaped clusters", example: "separating dense spatial regions from isolated noise points" },
    { concept: "clustering quality evaluation", definition: "the assessment of how meaningful and well-formed the produced clusters are", purpose: "to judge whether clustering results are useful", example: "measuring compactness and separation of clusters" }
  ],
  11: [
    { concept: "fuzzy clustering", definition: "a clustering approach where an object may belong to multiple clusters with different degrees", purpose: "to model overlapping groups", example: "a document partially belonging to both business and technology topics" },
    { concept: "probabilistic model-based clustering", definition: "a clustering approach that assumes data are generated by probabilistic models", purpose: "to capture uncertainty and hidden structure", example: "modeling clusters as mixtures of probability distributions" },
    { concept: "Expectation-Maximization", definition: "an iterative method that alternates between estimating hidden assignments and updating parameters", purpose: "to fit probabilistic cluster models", example: "recomputing soft cluster memberships and then parameter values" },
    { concept: "subspace clustering", definition: "the discovery of clusters in subsets of dimensions rather than the full space", purpose: "to handle high-dimensional data more effectively", example: "finding gene-expression clusters using only relevant dimensions" },
    { concept: "spectral clustering", definition: "a clustering method that uses eigenstructure of similarity graphs to partition data", purpose: "to reveal structure not easily found by simple geometric methods", example: "clustering points using graph Laplacian information" },
    { concept: "clustering constraints", definition: "additional rules such as must-link and cannot-link used to guide cluster formation", purpose: "to incorporate domain knowledge into clustering", example: "forcing two related records to stay in the same cluster" }
  ],
  12: [
    { concept: "outlier", definition: "a data object that deviates significantly from the majority behavior in a data set", purpose: "to reveal anomalies, rare cases, or suspicious behavior", example: "a fraudulent purchase far outside normal spending" },
    { concept: "statistical outlier detection", definition: "the use of statistical models to identify observations unlikely under normal behavior", purpose: "to detect anomalies with distribution-based reasoning", example: "flagging values far beyond the expected normal range" },
    { concept: "proximity-based outlier detection", definition: "the detection of outliers using distance or neighborhood relationships", purpose: "to find objects isolated from other points", example: "marking a point whose nearest neighbors are very far away" },
    { concept: "density-based outlier detection", definition: "the detection of objects that lie in regions of significantly lower density than their neighbors", purpose: "to identify local anomalies", example: "a point in a sparse pocket beside a dense cluster" },
    { concept: "contextual outlier", definition: "an outlier whose abnormality depends on a specific context", purpose: "to model anomalies that are unusual only under certain conditions", example: "a winter temperature that would be normal in summer but not in January" },
    { concept: "collective outlier", definition: "a set of related data objects whose joint behavior is abnormal even if individual objects are not", purpose: "to detect unusual group behavior", example: "a suspicious sequence of network events that looks normal item by item" }
  ],
  13: [
    { concept: "sequence data mining", definition: "the mining of ordered data such as time series or symbolic sequences", purpose: "to discover temporal or sequential patterns", example: "finding repeated event sequences in clickstream data" },
    { concept: "graph and network mining", definition: "the analysis of graph-structured data where relationships are central", purpose: "to discover structure in connected data", example: "studying communities in a social network" },
    { concept: "statistical data mining", definition: "a view of data mining that emphasizes statistical models and inference", purpose: "to connect pattern discovery with rigorous statistical reasoning", example: "using statistical models to validate discovered trends" },
    { concept: "recommender systems", definition: "systems that suggest items to users based on preferences or behavior", purpose: "to personalize decisions and choices", example: "recommending movies based on past ratings" },
    { concept: "privacy-preserving concerns", definition: "issues involving the protection of sensitive information during mining and analysis", purpose: "to reduce harm and misuse of data", example: "limiting exposure of personal data during analytics" },
    { concept: "research frontier", definition: "an emerging direction where new methods, data types, or challenges are still developing", purpose: "to guide future innovation in data mining", example: "developing mining methods for multimedia and networked data" }
  ]
};

const uiStateKey = "data-mining-interactive-textbook-ui-v1";
const savedUiState = loadUiState();
const state = {
  chapterIndex: savedUiState.chapterIndex ?? 0,
  flashcardIndex: savedUiState.flashcardIndex ?? 0,
  flashcardFlipped: false,
  studyConcept: savedUiState.studyConcept ?? "",
  selectedLevel: savedUiState.selectedLevel ?? 1,
  quizQuestions: [],
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizResults: []
};

const progress = loadProgress();
const currentPage = document.body.dataset.page || "home";

const elements = {
  navLinks: [...document.querySelectorAll("[data-nav]")],
  chapterSelect: document.getElementById("chapter-select"),
  chapterCurrentCard: document.getElementById("chapter-current-card"),
  completedCount: document.getElementById("completed-count"),
  currentChapterLabel: document.getElementById("current-chapter-label"),
  bestScoreLabel: document.getElementById("best-score-label"),
  chapterCompletedPill: document.getElementById("chapter-completed-pill"),
  chapterScorePill: document.getElementById("chapter-score-pill"),
  chapterPercentPill: document.getElementById("chapter-percent-pill"),
  chapterTitle: document.getElementById("chapter-title"),
  chapterPages: document.getElementById("chapter-pages"),
  chapterSummaryText: document.getElementById("chapter-summary-text"),
  chapterTopics: document.getElementById("chapter-topics"),
  savedProgressList: document.getElementById("saved-progress-list"),
  savedProgressEmpty: document.getElementById("saved-progress-empty"),
  toggleLevelPanelButton: document.getElementById("toggle-level-panel-button"),
  levelPanelContent: document.getElementById("level-panel-content"),
  levelGrid: document.getElementById("level-grid"),
  quizStatus: document.getElementById("quiz-status"),
  quizScorePill: document.getElementById("quiz-score-pill"),
  quizProgressBar: document.getElementById("quiz-progress-bar"),
  quizQuestion: document.getElementById("quiz-question"),
  quizOptions: document.getElementById("quiz-options"),
  quizFeedback: document.getElementById("quiz-feedback"),
  nextQuestionButton: document.getElementById("next-question-button"),
  quizPanel: document.getElementById("quiz-panel"),
  quizResults: document.getElementById("quiz-results"),
  quizResultsSummary: document.getElementById("quiz-results-summary"),
  quizResultsList: document.getElementById("quiz-results-list"),
  retryQuizButton: document.getElementById("retry-quiz-button"),
  nextLevelButton: document.getElementById("next-level-button"),
  flashcard: document.getElementById("flashcard"),
  flashcardFrontFace: document.querySelector(".flashcard-front"),
  flashcardBackFace: document.querySelector(".flashcard-back"),
  flashcardFrontText: document.getElementById("flashcard-front-text"),
  flashcardBackText: document.getElementById("flashcard-back-text"),
  cardPosition: document.getElementById("card-position"),
  prevCardButton: document.getElementById("prev-card-button"),
  nextCardButton: document.getElementById("next-card-button")
};

function init() {
  attachEvents();
  renderNavigation();
  renderChapterSelector();
  renderCurrentChapterCard();
  updateProgressPanel();
  if (elements.levelGrid) {
    renderLevelButtons();
  }
  renderPage();
  registerServiceWorker();
}

function attachEvents() {
  if (elements.chapterSelect) {
    elements.chapterSelect.addEventListener("change", (event) => {
      selectChapter(Number(event.target.value));
    });
  }

  if (elements.toggleLevelPanelButton) {
    elements.toggleLevelPanelButton.addEventListener("click", toggleLevelPanel);
  }

  if (elements.prevCardButton) {
    elements.prevCardButton.addEventListener("click", () => moveFlashcard(-1));
  }

  if (elements.nextCardButton) {
    elements.nextCardButton.addEventListener("click", () => moveFlashcard(1));
  }

  if (elements.flashcard) {
    elements.flashcard.addEventListener("click", flipFlashcard);
  }

  if (elements.nextQuestionButton) {
    elements.nextQuestionButton.addEventListener("click", moveToNextQuestion);
  }

  if (elements.retryQuizButton) {
    elements.retryQuizButton.addEventListener("click", resetQuiz);
  }

  if (elements.nextLevelButton) {
    elements.nextLevelButton.addEventListener("click", moveToNextLevel);
  }
}

function renderNavigation() {
  elements.navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === currentPage);
  });
}

function renderChapterSelector() {
  if (!elements.chapterSelect) {
    return;
  }

  elements.chapterSelect.innerHTML = chapters
    .map((chapter, index) => `<option value="${index}">Chapter ${chapter.id}: ${chapter.title}</option>`)
    .join("");
  elements.chapterSelect.value = String(state.chapterIndex);
}

function renderCurrentChapterCard() {
  if (!elements.chapterCurrentCard) {
    return;
  }

  const chapter = getCurrentChapter();
  const chapterProgress = progress[chapter.id] || {};
  const completedLevels = Object.keys(chapterProgress.levels || {}).length;
  const viewedCards = chapterProgress.flashcardsViewed || 0;

  elements.chapterCurrentCard.innerHTML = `
    <strong>Chapter ${chapter.id}</strong>
    <span>${chapter.title}</span>
    <span class="chapter-meta">${completedLevels > 0 ? `${completedLevels}/${LEVEL_COUNT} levels completed` : "No levels completed yet"} | Cards viewed: ${viewedCards}</span>
  `;
}

function selectChapter(index) {
  state.chapterIndex = Number.isFinite(index) ? index : 0;
  state.flashcardIndex = 0;
  state.flashcardFlipped = false;
  state.selectedLevel = 1;
  state.quizQuestions = [];
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  state.quizResults = [];
  saveUiState();
  renderCurrentChapterCard();
  updateProgressPanel();
  if (elements.levelGrid) {
    renderLevelButtons();
  }
  renderPage();
}

function renderPage() {
  renderHomePage();
  renderFlashcardPage();
  renderQuizPage();
}

function renderHomePage() {
  if (!elements.chapterTitle) {
    return;
  }

  const chapter = getCurrentChapter();
  elements.chapterTitle.textContent = `Chapter ${chapter.id}: ${chapter.title}`;
  if (elements.chapterPages) {
    elements.chapterPages.textContent = chapter.pages;
  }
  if (elements.chapterSummaryText) {
    elements.chapterSummaryText.textContent = chapter.summary;
  }
  if (elements.chapterTopics) {
    elements.chapterTopics.innerHTML = chapter.subtopics.map((topic) => `
      <div class="topic-item">
        <strong>${topic}</strong>
        <span>Study this idea in the flashcards, then test it on the quiz page.</span>
      </div>
    `).join("");
  }
  renderSavedProgressList();
}

function renderSavedProgressList() {
  if (!elements.savedProgressList || !elements.savedProgressEmpty) {
    return;
  }

  const entries = chapters
    .map((chapter) => {
      const chapterProgress = progress[chapter.id];
      if (!chapterProgress) {
        return null;
      }

      const levels = Object.entries(chapterProgress.levels || {})
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .map(([level, details]) => `Level ${level} (${details.bestScore || 0}/10)`);
      const viewedCards = chapterProgress.flashcardsViewed || 0;

      if (!levels.length && !viewedCards) {
        return null;
      }

      return {
        chapter,
        levels,
        viewedCards
      };
    })
    .filter(Boolean);

  if (!entries.length) {
    elements.savedProgressEmpty.classList.remove("hidden");
    elements.savedProgressList.innerHTML = "";
    return;
  }

  elements.savedProgressEmpty.classList.add("hidden");
  elements.savedProgressList.innerHTML = entries.map((entry) => `
    <div class="saved-item">
      <strong>Chapter ${entry.chapter.id}: ${entry.chapter.title}</strong>
      <div class="saved-item-meta">${entry.levels.length ? `Completed levels: ${entry.levels.join(", ")}` : "No completed quiz levels yet"}</div>
      <div class="saved-item-meta">Flashcards viewed: ${entry.viewedCards}</div>
    </div>
  `).join("");
}

function renderFlashcardPage() {
  if (!elements.flashcard) {
    return;
  }

  const chapter = getCurrentChapter();
  focusFlashcardOnStudyConcept(chapter);
  const safeIndex = Math.min(state.flashcardIndex, chapter.flashcards.length - 1);
  state.flashcardIndex = Math.max(0, safeIndex);
  const card = chapter.flashcards[state.flashcardIndex];

  elements.flashcard.classList.toggle("flipped", state.flashcardFlipped);
  elements.flashcardFrontText.textContent = card.front;
  elements.flashcardBackText.textContent = card.back;
  elements.cardPosition.textContent = `Card ${state.flashcardIndex + 1} of ${chapter.flashcards.length}`;
  syncFlashcardHeight();
}

function moveFlashcard(direction) {
  const chapter = getCurrentChapter();
  state.flashcardIndex = (state.flashcardIndex + direction + chapter.flashcards.length) % chapter.flashcards.length;
  state.flashcardFlipped = false;
  saveUiState();
  renderFlashcardPage();
}

function flipFlashcard() {
  state.flashcardFlipped = !state.flashcardFlipped;
  if (state.flashcardFlipped) {
    saveFlashcardProgress();
  }
  renderFlashcardPage();
}

function syncFlashcardHeight() {
  if (!elements.flashcard || !elements.flashcardFrontFace || !elements.flashcardBackFace) {
    return;
  }

  window.requestAnimationFrame(() => {
    const minimumHeight = window.innerWidth <= 760 ? 500 : 420;
    const frontHeight = elements.flashcardFrontFace.scrollHeight;
    const backHeight = elements.flashcardBackFace.scrollHeight;
    elements.flashcard.style.height = `${Math.max(minimumHeight, frontHeight, backHeight)}px`;
  });
}

function renderQuizPage() {
  if (!elements.levelGrid) {
    return;
  }

  syncLevelPanelState();
  renderLevelButtons();
  if (!state.quizQuestions.length) {
    resetQuiz();
    return;
  }
  renderQuiz();
}

function startLevel(level) {
  state.selectedLevel = level;
  state.quizQuestions = [];
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  state.quizResults = [];
  saveUiState();
  renderLevelButtons();
  setLevelPanelCollapsed(true);
  resetQuiz();
  if (elements.quizQuestion) {
    elements.quizQuestion.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function resetQuiz() {
  if (!elements.quizPanel || !elements.quizResults) {
    return;
  }

  state.quizQuestions = getCurrentLevelQuestions();
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  state.quizResults = [];
  saveUiState();
  elements.quizPanel.classList.remove("hidden");
  elements.quizResults.classList.add("hidden");
  renderQuiz();
}

function renderQuiz() {
  if (!elements.quizQuestion) {
    return;
  }

  const question = state.quizQuestions[state.quizIndex];

  if (!question) {
    if (state.quizQuestions.length === 0) {
      elements.quizStatus.textContent = "Choose a level to begin";
      elements.quizScorePill.textContent = "Score: 0";
      elements.quizQuestion.textContent = `Pick one level above to start your ${QUESTIONS_PER_LEVEL}-question quiz set.`;
      elements.quizOptions.innerHTML = "";
      elements.quizFeedback.className = "quiz-feedback hidden";
      elements.quizFeedback.innerHTML = "";
      elements.nextQuestionButton.classList.add("hidden");
      elements.quizProgressBar.style.width = "0";
      return;
    }
    renderQuizResults();
    return;
  }

  elements.quizStatus.textContent = `Level ${state.selectedLevel} | Question ${state.quizIndex + 1} of ${state.quizQuestions.length}`;
  elements.quizScorePill.textContent = `Score: ${state.quizScore}`;
  elements.quizProgressBar.style.width = `${(state.quizIndex / state.quizQuestions.length) * 100}%`;
  if (question.questionHtml) {
    elements.quizQuestion.innerHTML = question.questionHtml;
  } else {
    elements.quizQuestion.textContent = question.question;
  }
  elements.quizOptions.innerHTML = "";
  elements.quizFeedback.className = "quiz-feedback hidden";
  elements.quizFeedback.innerHTML = "";
  elements.nextQuestionButton.classList.add("hidden");

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    if (Array.isArray(question.optionHtml) && question.optionHtml[optionIndex]) {
      button.innerHTML = question.optionHtml[optionIndex];
    } else {
      button.textContent = option;
    }
    button.addEventListener("click", () => checkAnswer(optionIndex));
    elements.quizOptions.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  if (state.quizAnswered || !elements.quizOptions) {
    return;
  }

  state.quizAnswered = true;
  const question = state.quizQuestions[state.quizIndex];
  const isCorrect = selectedIndex === question.answerIndex;
  const optionButtons = [...elements.quizOptions.querySelectorAll(".quiz-option")];

  optionButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answerIndex) {
      button.classList.add("correct");
    }
    if (index === selectedIndex && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    state.quizScore += 1;
  }

  state.quizResults.push({
    question: question.question,
    selected: getPlainText(question.options[selectedIndex]),
    correct: getPlainText(question.options[question.answerIndex]),
    explanation: question.explanation,
    isCorrect
  });

  elements.quizScorePill.textContent = `Score: ${state.quizScore}`;
  elements.quizFeedback.className = `quiz-feedback ${isCorrect ? "correct" : "wrong"}`;
  elements.quizFeedback.innerHTML = `
    <div class="feedback-head">
      <span class="feedback-emoji">${isCorrect ? "🎉" : "📘"}</span>
      <strong>${isCorrect ? "Correct answer" : "Wrong answer"}</strong>
    </div>
    <div>${question.explanation}</div>
    <div class="quiz-actions feedback-actions">
      <button type="button" class="secondary-button feedback-study-button">Learn this concept</button>
    </div>
  `;
  const studyButton = elements.quizFeedback.querySelector(".feedback-study-button");
  if (studyButton) {
    studyButton.addEventListener("click", () => openStudyForQuestion(question));
  }
  elements.nextQuestionButton.textContent = state.quizIndex === state.quizQuestions.length - 1 ? "See Results" : "Next Question";
  elements.nextQuestionButton.classList.remove("hidden");
}

function moveToNextQuestion() {
  if (!state.quizAnswered) {
    return;
  }

  state.quizIndex += 1;
  state.quizAnswered = false;
  renderQuiz();
}

function renderQuizResults() {
  const chapter = getCurrentChapter();
  const chapterProgress = ensureChapterProgress(chapter.id);
  const levelProgress = chapterProgress.levels[state.selectedLevel] || {};
  const previousBest = levelProgress.bestScore || 0;
  const bestScore = Math.max(previousBest, state.quizScore);
  const attempts = (levelProgress.attempts || 0) + 1;
  const cumulativeScore = (levelProgress.cumulativeScore || 0) + state.quizScore;

  chapterProgress.levels[state.selectedLevel] = {
    bestScore,
    attempts,
    cumulativeScore,
    lastScore: state.quizScore,
    completed: true,
    completedAt: new Date().toISOString()
  };
  saveProgress();

  elements.quizPanel.classList.add("hidden");
  elements.quizResults.classList.remove("hidden");
  elements.quizProgressBar.style.width = "100%";
  elements.quizResultsSummary.textContent = `You scored ${state.quizScore} out of ${state.quizQuestions.length} in Chapter ${chapter.id}, Level ${state.selectedLevel}. Best saved score for this level: ${bestScore}/${state.quizQuestions.length}.`;
  elements.quizResultsList.innerHTML = state.quizResults.map((result, index) => `
    <div class="result-item">
      <strong>Q${index + 1}: ${result.isCorrect ? "Correct" : "Needs review"}</strong>
      <span>${result.question}</span>
      <span>Your answer: ${result.selected}</span>
      <span>Correct answer: ${result.correct}</span>
      <span>${result.explanation}</span>
    </div>
  `).join("");

  renderCurrentChapterCard();
  renderLevelButtons();
  updateProgressPanel();
  renderSavedProgressList();
}

function renderLevelButtons() {
  if (!elements.levelGrid) {
    return;
  }

  const chapter = getCurrentChapter();
  elements.levelGrid.innerHTML = "";

  for (let level = 1; level <= LEVEL_COUNT; level += 1) {
    const bestScore = progress[chapter.id]?.levels?.[level]?.bestScore;
    const isCompleted = Boolean(progress[chapter.id]?.levels?.[level]?.completed);
    const button = document.createElement("button");
    button.className = `level-button ${isCompleted ? "completed" : "pending"} ${state.selectedLevel === level ? "active" : ""}`;
    button.type = "button";
    button.setAttribute("data-level", String(level));
    button.innerHTML = `
      <strong>Level ${level}</strong>
      <span class="level-meta">${isCompleted ? `Completed | Best: ${bestScore}/${QUESTIONS_PER_LEVEL} | Retake anytime` : `Not completed yet | ${QUESTIONS_PER_LEVEL} questions`}</span>
    `;
    button.addEventListener("click", () => startLevel(level));
    elements.levelGrid.appendChild(button);
  }
}

function toggleLevelPanel() {
  if (!elements.levelPanelContent) {
    return;
  }

  const isCollapsed = elements.levelPanelContent.classList.contains("collapsed");
  setLevelPanelCollapsed(!isCollapsed);
}

function setLevelPanelCollapsed(collapsed) {
  if (!elements.levelPanelContent || !elements.toggleLevelPanelButton) {
    return;
  }

  elements.levelPanelContent.classList.toggle("collapsed", collapsed);
  elements.toggleLevelPanelButton.textContent = collapsed ? "Show Levels" : "Hide Levels";
  elements.toggleLevelPanelButton.setAttribute("aria-expanded", String(!collapsed));
}

function syncLevelPanelState() {
  if (!elements.levelPanelContent) {
    return;
  }

  setLevelPanelCollapsed(true);
}

function moveToNextLevel() {
  if (state.selectedLevel < LEVEL_COUNT) {
    startLevel(state.selectedLevel + 1);
    return;
  }
  startLevel(state.selectedLevel);
}

function updateProgressPanel() {
  const chapter = getCurrentChapter();
  const chapterLevels = progress[chapter.id]?.levels || {};
  const bestScore = Object.values(chapterLevels).reduce((best, level) => Math.max(best, level.bestScore || 0), 0);
  const viewedCards = progress[chapter.id]?.flashcardsViewed || 0;
  const chapterStats = getChapterProgressStats(chapter.id);

  if (elements.completedCount) {
    elements.completedCount.textContent = `${chapterStats.totalCompletedLevels} / ${chapters.length * LEVEL_COUNT}`;
  }
  if (elements.currentChapterLabel) {
    elements.currentChapterLabel.textContent = `Chapter ${chapter.id}`;
  }
  if (elements.bestScoreLabel) {
    elements.bestScoreLabel.textContent = bestScore ? `Best level score ${bestScore}/10 | Cards viewed ${viewedCards}` : viewedCards ? `Cards viewed ${viewedCards}` : "No activity yet";
  }
  if (elements.chapterCompletedPill) {
    elements.chapterCompletedPill.textContent = `Completed: ${chapterStats.chapterCompletedLevels}/${LEVEL_COUNT}`;
  }
  if (elements.chapterScorePill) {
    elements.chapterScorePill.textContent = `Saved score: ${chapterStats.chapterBestPoints}/${LEVEL_COUNT * QUESTIONS_PER_LEVEL}`;
  }
  if (elements.chapterPercentPill) {
    elements.chapterPercentPill.textContent = `Achieved: ${chapterStats.chapterPercent}%`;
  }
}

function getChapterProgressStats(chapterId) {
  const chapterProgress = ensureChapterProgress(chapterId);
  const chapterLevels = Object.values(chapterProgress.levels || {});
  const chapterCompletedLevels = chapterLevels.filter((level) => level.completed).length;
  const chapterBestPoints = chapterLevels.reduce((total, level) => total + (Number(level.bestScore) || 0), 0);
  const chapterPercent = Math.round((chapterBestPoints / (LEVEL_COUNT * QUESTIONS_PER_LEVEL)) * 100);

  const totalCompletedLevels = Object.values(progress).reduce((total, item) => {
    return total + Object.values(item.levels || {}).filter((level) => level.completed).length;
  }, 0);

  return {
    chapterCompletedLevels,
    chapterBestPoints,
    chapterPercent: Number.isFinite(chapterPercent) ? chapterPercent : 0,
    totalCompletedLevels
  };
}

function openStudyForQuestion(question) {
  const concept = getStudyConceptForQuestion(question);
  state.studyConcept = concept;
  saveUiState();
  window.location.href = "flashcards.html";
}

function getStudyConceptForQuestion(question) {
  if (question.studyConcept) {
    return question.studyConcept;
  }

  const correctOption = getPlainText(question.options?.[question.answerIndex] || "");
  if (correctOption.includes(":")) {
    return cleanSentence(correctOption.split(":")[0]);
  }

  const explanation = cleanSentence(question.explanation || "");
  const match = explanation.match(/^([A-Za-z0-9+\-\/() ,]+?)\s+(is|means|matters|refers|helps|uses|includes)\b/i);
  if (match) {
    return cleanSentence(match[1]);
  }

  return cleanSentence(correctOption || question.question || "");
}

function focusFlashcardOnStudyConcept(chapter) {
  const concept = cleanSentence(state.studyConcept || "");
  if (!concept) {
    return;
  }

  const conceptKey = normalizeText(concept);
  const cardIndex = chapter.flashcards.findIndex((card) => {
    return normalizeText(card.front).includes(conceptKey) || normalizeText(card.back).includes(conceptKey);
  });

  if (cardIndex >= 0) {
    state.flashcardIndex = cardIndex;
    state.flashcardFlipped = false;
  }

  state.studyConcept = "";
  saveUiState();
}

function getCurrentChapter() {
  return chapters[Math.max(0, Math.min(chapters.length - 1, state.chapterIndex))];
}

function getCurrentLevelQuestions() {
  const chapter = getCurrentChapter();
  const start = (state.selectedLevel - 1) * QUESTIONS_PER_LEVEL;
  return chapter.questionBank.slice(start, start + QUESTIONS_PER_LEVEL);
}

function ensureChapterProgress(chapterId) {
  if (!progress[chapterId]) {
    progress[chapterId] = { levels: {}, flashcardsViewed: 0 };
  }
  if (!progress[chapterId].levels) {
    progress[chapterId].levels = {};
  }
  if (!Number.isFinite(progress[chapterId].flashcardsViewed)) {
    progress[chapterId].flashcardsViewed = 0;
  }
  Object.values(progress[chapterId].levels).forEach((levelProgress) => {
    if (!Number.isFinite(levelProgress.attempts)) {
      levelProgress.attempts = levelProgress.completed ? 1 : 0;
    }
    if (!Number.isFinite(levelProgress.cumulativeScore)) {
      levelProgress.cumulativeScore = levelProgress.bestScore || 0;
    }
    if (!Number.isFinite(levelProgress.lastScore)) {
      levelProgress.lastScore = levelProgress.bestScore || 0;
    }
  });
  return progress[chapterId];
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch (error) {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function loadUiState() {
  try {
    return JSON.parse(localStorage.getItem(uiStateKey)) || {};
  } catch (error) {
    return {};
  }
}

function saveUiState() {
  localStorage.setItem(uiStateKey, JSON.stringify({
    chapterIndex: state.chapterIndex,
    flashcardIndex: state.flashcardIndex,
    studyConcept: state.studyConcept,
    selectedLevel: state.selectedLevel
  }));
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

function enrichChapters() {
  chapters.forEach((chapter) => {
    chapter.subtopics = chapterCoverage[chapter.id] || chapter.topics;
    chapter.facts = chapterFacts[chapter.id] || [];
    chapter.studyItems = chapter.facts.length ? chapter.facts : buildStudyItems(chapter);
  });

  chapters.forEach((chapter) => {
      const factCards = chapter.studyItems.map((fact) => ({
        front: `Explain ${fact.concept}.`,
        back: formatStudyCardBack(fact)
      }));

      chapter.flashcards = dedupeFlashcards([...chapter.flashcards, ...factCards]);
      chapter.questionBank = buildQuestionBank(chapter);
    });
  }

function formatStudyCardBack(fact) {
  return [
    fact.concept.toUpperCase(),
    `Definition: ${cleanSentence(fact.definition)}`,
    `Why it matters: ${cleanSentence(fact.purpose)}`,
    `Example: ${cleanSentence(fact.example)}`
  ].join("\n\n");
}

function createSeededRandom(seed) {
  let value = seed;
  return function next() {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
}

function shuffle(list, randomFn = Math.random) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(randomFn() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function buildQuestionBank(chapter) {
  const bank = [];
  const seenQuestions = new Set();
  const targetCount = LEVEL_COUNT * QUESTIONS_PER_LEVEL;

  (chapter.quiz || []).forEach((question) => {
    const key = normalizeText(question.question);
    if (seenQuestions.has(key) || bank.length >= targetCount) {
      return;
    }
    bank.push(question);
    seenQuestions.add(key);
  });

  for (let level = 1; level <= LEVEL_COUNT; level += 1) {
    for (let offset = 0; offset < QUESTIONS_PER_LEVEL; offset += 1) {
      if (bank.length >= targetCount) {
        return bank;
      }
      const question = generateQuestion(chapter, level, offset, seenQuestions);
      bank.push(question);
      seenQuestions.add(normalizeText(question.question));
    }
  }
  return bank;
}

function generateQuestion(chapter, level, offset, seenQuestions = new Set()) {
  const facts = chapter.studyItems || chapter.facts || [];
  const startIndex = ((level - 1) * 10 + offset) % facts.length;
  const seed = createSeededRandom(chapter.id * 1000 + level * 50 + offset);
  const templateIndex = (level + offset) % questionTemplates.length;

  for (let shift = 0; shift < facts.length; shift += 1) {
    const focus = facts[(startIndex + shift) % facts.length];
    for (let attempt = 0; attempt < questionTemplates.length; attempt += 1) {
      const builder = questionTemplates[(templateIndex + attempt) % questionTemplates.length];
      const candidate = finalizeQuestion(builder(chapter, focus, level, offset, seed));
      if (!seenQuestions.has(normalizeText(candidate.question))) {
        return candidate;
      }
    }
  }

  return finalizeQuestion(questionTemplates[0](chapter, facts[startIndex], level, offset, seed));
}

function pickFactDistractors(chapter, concept, field, count) {
  const localPool = (chapter.studyItems || chapter.facts || [])
    .filter((fact) => fact.concept !== concept)
    .map((fact) => fact[field]);
  const globalPool = chapters
    .flatMap((item) => item.studyItems || item.facts || [])
    .filter((fact) => fact.concept !== concept)
    .map((fact) => fact[field]);
  return uniqueSlice([...localPool, ...globalPool], count);
}

function pickFactStatementDistractors(chapter, concept, field, count) {
  const localPool = (chapter.studyItems || chapter.facts || [])
    .filter((fact) => fact.concept !== concept)
    .map((fact) => `${fact.concept}: ${fact[field]}`);
  const globalPool = chapters
    .flatMap((item) => item.studyItems || item.facts || [])
    .filter((fact) => fact.concept !== concept)
    .map((fact) => `${fact.concept}: ${fact[field]}`);
  return uniqueSlice([...localPool, ...globalPool], count);
}

function pickFactConceptDistractors(chapter, concept, count) {
  const localPool = (chapter.studyItems || chapter.facts || [])
    .filter((fact) => fact.concept !== concept)
    .map((fact) => fact.concept);
  const globalPool = chapters
    .flatMap((item) => item.studyItems || item.facts || [])
    .filter((fact) => fact.concept !== concept)
    .map((fact) => fact.concept);
  return uniqueSlice([...localPool, ...globalPool], count);
}

function buildStudyItems(chapter) {
  const items = [...(chapter.facts || [])];
  const seen = new Set(items.map((item) => normalizeText(item.concept)));
  const summarySentences = chapter.summary
    .split(". ")
    .map((sentence) => sentence.replace(/\.$/, "").trim())
    .filter(Boolean)
    .map((sentence) => sentence.replace(/^this chapter\s+/i, ""))
    .map((sentence) => sentence.replace(/^this section\s+/i, ""))
    .map((sentence) => sentence.charAt(0).toLowerCase() + sentence.slice(1));

  chapter.subtopics.forEach((topic, index) => {
    const key = normalizeText(topic);
    if (seen.has(key)) {
      return;
    }
    const summarySentence = summarySentences[index % summarySentences.length] || chapter.summary;
    const neighbor = chapter.subtopics[(index + 1) % chapter.subtopics.length] || chapter.title;
    items.push({
      concept: topic,
      definition: `${topic} is one of the concepts studied in ${chapter.title}.`,
      purpose: `to help explain ${cleanSentence(summarySentence).toLowerCase()}`,
      example: `using ${topic.toLowerCase()} while reviewing ${neighbor.toLowerCase()}`
    });
    seen.add(key);
  });

  return items;
}

function dedupeFlashcards(cards) {
  const seen = new Set();
  return cards.filter((card) => {
    const key = cardTopicKey(card);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function cardTopicKey(card) {
  return normalizeText(card.front)
    .replace(/^explain\s+/, "")
    .replace(/^how would you explain\s+/, "")
    .replace(/["?.]/g, "")
    .trim();
}

function uniqueOptions(options) {
  const seen = new Set();
  return options.filter((option) => {
    const key = normalizeText(option);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function finalizeQuestion(question) {
  const correctAnswer = question.options[question.answerIndex];
  const options = [correctAnswer];
  uniqueOptions(question.options).forEach((option) => {
    if (!options.some((item) => normalizeText(item) === normalizeText(option))) {
      options.push(option);
    }
  });

  if (options.length < 4) {
    const fillerPool = uniqueOptions(chapters.flatMap((chapter) => (chapter.studyItems || chapter.facts || []).map((fact) => fact.concept)));
    fillerPool.forEach((option) => {
      if (options.length < 4 && !options.some((item) => normalizeText(item) === normalizeText(option))) {
        options.push(option);
      }
    });
  }

  const shuffledOptions = shuffle(
    options.slice(0, 4),
    createSeededRandom(normalizeText(question.question).length + normalizeText(correctAnswer).length)
  );

  return {
    ...question,
    options: shuffledOptions,
    answerIndex: shuffledOptions.findIndex((option) => normalizeText(option) === normalizeText(correctAnswer))
  };
}

const questionTemplates = [
  (chapter, focus, level, offset, seed) => {
    const correct = focus.definition;
    const options = shuffle([correct, ...pickFactDistractors(chapter, focus.concept, "definition", 3)], seed);
    return {
      question: `Which statement best describes ${focus.concept}?`,
      options,
      answerIndex: options.indexOf(correct),
      explanation: `${focus.concept} is defined as ${focus.definition}.`,
      studyConcept: focus.concept
    };
  },
  (chapter, focus, level, offset, seed) => {
    const correct = `${focus.concept}: ${focus.purpose}`;
    const options = shuffle([correct, ...pickFactStatementDistractors(chapter, focus.concept, "purpose", 3)], seed);
    return {
      question: `Which statement correctly explains why ${focus.concept} matters?`,
      options,
      answerIndex: options.indexOf(correct),
      explanation: `${focus.concept} matters because it helps ${focus.purpose}.`,
      studyConcept: focus.concept
    };
  },
  (chapter, focus, level, offset, seed) => {
    const correct = focus.concept;
    const options = shuffle([correct, ...pickFactConceptDistractors(chapter, focus.concept, 3)], seed);
    return {
      question: `Which concept matches this description: ${focus.definition}?`,
      options,
      answerIndex: options.indexOf(correct),
      explanation: `${focus.concept} is the concept defined as ${focus.definition}.`,
      studyConcept: focus.concept
    };
  },
  (chapter, focus, level, offset, seed) => {
    const correct = focus.concept;
    const options = shuffle([correct, ...pickFactConceptDistractors(chapter, focus.concept, 3)], seed);
    return {
      question: `A student wants to ${focus.purpose}. Which concept should they study?`,
      options,
      answerIndex: options.indexOf(correct),
      explanation: `The correct concept is ${focus.concept}, because its role is to ${focus.purpose}.`,
      studyConcept: focus.concept
    };
  }
];

enrichChapters();
init();

function uniqueSlice(list, count) {
  const seen = new Set();
  const result = [];
  for (const item of list) {
    const key = typeof item === "string" ? item : `${item.id}-${item.title}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    result.push(item);
    if (result.length === count) {
      break;
    }
  }
  return result;
}

function normalizeText(text) {
  return String(text).trim().toLowerCase();
}

function cleanSentence(text) {
  return String(text)
    .replace(/\s+/g, " ")
    .replace(/\.+$/g, "")
    .trim();
}

function getPlainText(value) {
  return String(value).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function saveFlashcardProgress() {
  const chapter = getCurrentChapter();
  const chapterProgress = ensureChapterProgress(chapter.id);
  chapterProgress.flashcardsViewed = Math.max(chapterProgress.flashcardsViewed || 0, state.flashcardIndex + 1);
  saveProgress();
  saveUiState();
  renderCurrentChapterCard();
  updateProgressPanel();
  renderSavedProgressList();
}

